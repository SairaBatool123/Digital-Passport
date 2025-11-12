import React, { useState } from 'react'
import {
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Button, Card, CardHeader, CardFooter, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap'
import { LuDownload, LuPlus } from 'react-icons/lu'
import { TbChevronDown, TbEdit, TbEye, TbTrash } from 'react-icons/tb'
import AddRawMaterialModal from './AddRawMaterialModal'
import { rawMaterialsData } from '../data'
import DataTable from '@/components/table/DataTable'
import DeleteConfirmationModal from '@/components/table/DeleteConfirmationModal'
import TablePagination from '@/components/table/TablePagination'
import { useToggle } from 'usehooks-ts'

const columnHelper = createColumnHelper()

const RawMaterialCard = () => {
  const [showModal, toggleModal] = useToggle(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [data, setData] = useState([...rawMaterialsData])
  const [globalFilter, setGlobalFilter] = useState('')
  const [sorting, setSorting] = useState([])
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 8 })
  const [selectedRowIds, setSelectedRowIds] = useState({})

  const toggleDeleteModal = () => setShowDeleteModal(!showDeleteModal)

  const handleDelete = () => {
    const selectedIds = new Set(Object.keys(selectedRowIds).map(Number))
    setData((old) => old.filter((row) => !selectedIds.has(row.id)))
    setSelectedRowIds({})
    setPagination({ ...pagination, pageIndex: 0 })
    setShowDeleteModal(false)
  }

  const columns = [
    {
      id: 'select',
      header: ({ table }) => <input type="checkbox" checked={table.getIsAllRowsSelected()} onChange={table.getToggleAllRowsSelectedHandler()} />,
      cell: ({ row }) => <input type="checkbox" checked={row.getIsSelected()} onChange={row.getToggleSelectedHandler()} />,
      enableSorting: false,
      enableColumnFilter: false,
    },
    columnHelper.accessor('materialName', { header: 'Material Name' }),
    columnHelper.accessor('materialId', { header: 'Material ID' }),
    columnHelper.accessor('supplier', { header: 'Supplier' }),
    columnHelper.accessor('originCountry', { header: 'Origin Country' }),
    columnHelper.accessor('quantity', { header: 'Quantity' }),
    columnHelper.accessor('status', {
      header: 'Status',
      cell: ({ row }) => (
        <span
          className={`badge ${
            row.original.status === 'Available' ? 'bg-success' : row.original.status === 'Low Stock' ? 'bg-warning' : 'bg-danger'
          }`}>
          {row.original.status}
        </span>
      ),
    }),
    {
      header: 'Actions',
      cell: ({ row }) => (
        <div className="d-flex gap-1">
          <Button variant="default" size="sm">
            <TbEye />
          </Button>
          <Button variant="default" size="sm">
            <TbEdit />
          </Button>
          <Button variant="default" size="sm" onClick={() => setSelectedRowIds({ [row.original.id]: true })}>
            <TbTrash />
          </Button>
        </div>
      ),
    },
  ]

  const table = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter, pagination, rowSelection: selectedRowIds },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    onRowSelectionChange: setSelectedRowIds,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableColumnFilters: true,
    enableRowSelection: true,
  })

  const pageIndex = table.getState().pagination.pageIndex
  const pageSize = table.getState().pagination.pageSize
  const totalItems = table.getFilteredRowModel().rows.length
  const start = pageIndex * pageSize + 1
  const end = Math.min(start + pageSize - 1, totalItems)

  return (
    <Card>
      <CardHeader className="d-flex justify-content-between flex-wrap gap-2">
        <input
          type="search"
          className="form-control"
          placeholder="Search raw materials..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
        <div className="d-flex gap-2">
          <Dropdown align="end">
            <DropdownToggle className="btn-default">
              <LuDownload /> Export <TbChevronDown />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Export as PDF</DropdownItem>
              <DropdownItem>Export as CSV</DropdownItem>
              <DropdownItem>Export as Excel</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Button variant="primary" onClick={toggleModal}>
            <LuPlus /> Add Material
          </Button>
        </div>
      </CardHeader>

      <DataTable table={table} emptyMessage="No raw materials found" />

      {table.getRowModel().rows.length > 0 && (
        <CardFooter>
          <TablePagination
            totalItems={totalItems}
            start={start}
            end={end}
            itemsName="raw materials"
            showInfo
            previousPage={table.previousPage}
            canPreviousPage={table.getCanPreviousPage()}
            pageCount={table.getPageCount()}
            pageIndex={pageIndex}
            setPageIndex={table.setPageIndex}
            nextPage={table.nextPage}
            canNextPage={table.getCanNextPage()}
          />
        </CardFooter>
      )}

      <DeleteConfirmationModal
        show={showDeleteModal}
        onHide={toggleDeleteModal}
        onConfirm={handleDelete}
        selectedCount={Object.keys(selectedRowIds).length}
        itemName="material"
      />
      <AddRawMaterialModal show={showModal} handleClose={toggleModal} />
    </Card>
  )
}

export default RawMaterialCard

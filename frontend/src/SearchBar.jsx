/* eslint-disable react/prop-types */
export function SearchBar({ filter, onChange}) {
    return (
        <div className="mb-4">
            <input value={filter} onChange={(e) => onChange(e.currentTarget.value)} type="text" className="border rounded w-full px-3 py-2" placeholder="Search Professors" />
        </div>
    )
}
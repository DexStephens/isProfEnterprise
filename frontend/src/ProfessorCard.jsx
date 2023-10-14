/* eslint-disable react/prop-types */
export function ProfessorCard({professors}) {
    return (
        <>
            {professors.map((professor) => (
                <div key={professor.name} className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src={professor.image} alt="Professor 1" className="w-full h-36 object-contain" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold text-blue-700">{professor.name}</h2>
                        <p className="text-gray-600">{professor.title}</p>
                    </div>
                </div>
            ))}
        </>
        
    )
}
import Doctor from "./Doctor"

function DoctorList({list}) {
  return (
    <div>
      {list.map((entry) => (<Doctor key={entry.id} item={entry}/>))}
    </div>
  )
}

export default DoctorList
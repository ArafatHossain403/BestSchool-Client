

const CollegesCard = ({colleges}) => {

    const { college_name, admission_dates, events, research_history, sports, college_image_url } = colleges;

    return (
        <div className="card w-96 bg-green-200 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={college_image_url} alt="image" className="rounded-xl h-30 w-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>
          <span className="font-bold text-orange-700">Name: </span>
          {college_name}
        </p>
        <p>
          <span className="font-bold text-orange-700">Admission: </span> {admission_dates}
        </p>
        <p>
          <span className="font-bold text-orange-700">Events: </span>{" "}
          {events}
        </p>
        <p>
          <span className="font-bold text-orange-700">Research History: </span>{" "}
          {research_history}
        </p>
        <p>
          <span className="font-bold text-orange-700">Sports: </span>{" "}
          {sports}
        </p>

        <div className="card-actions">
          <button
            
            className="btn btn-warning"
          >
             View Details
          </button>
        </div>
      </div>
    </div>
    );
};

export default CollegesCard;
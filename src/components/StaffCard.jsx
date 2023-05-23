import './Satff.css'
const StaffCard = ({ staff }) => {
    const { name, education, designation, email, phone, areaOfInterest, department, image } = staff;

    return (
        <div className="staff-card">
            <div className="image">
                <img src={image} alt={name} />
            </div>
            <div className="details">
                <h2>{name}</h2>
                <p>{education}</p>
                <p>{designation}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{areaOfInterest}</p>
                <p>{department}</p>
            </div>
        </div>
    );
};

export default StaffCard;

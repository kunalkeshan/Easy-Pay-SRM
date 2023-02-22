export default function Cards(props){
    return (
        <div className="card">
            <div  className="card-info">
                <h1 className="text-5xl text-blue-900">{props.head}</h1>
                <h4 className="text-xl text-yellow-500">{props.para}</h4>
            </div>

        </div>
    );
};
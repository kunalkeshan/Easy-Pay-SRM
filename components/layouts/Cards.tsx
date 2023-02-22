interface Props{"head": string ,"para":string}
export default function Cards(props:Props) {
    return (
        <div className="card border-solid ">
            <div  className="card-info">
                <h1 className="text-5xl text-blue-900 m-5">{props.head}</h1>
                <h4 className="text-xl text-yellow-500 m-5">{props.para}</h4>
            </div>

        </div>
    );
};
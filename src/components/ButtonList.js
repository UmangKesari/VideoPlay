import Button from "./Button";

const ButtonList = () => {
    const categories = ["All", "Gaming", "Cricket", "News","Cooking","Songs"];
    return (
        <div className="flex">
            
            {/* {
                categories.map((ele,index) => {
                    console.log("printing button ", ele);
                    <Button key={index} name={ele}/>
                })
            } */}
            <Button name="All"/>
            <Button name="Gaming"/>
            <Button name="Cricket"/>
            <Button name="News"/>
            <Button name="Cooking"/>
            <Button name="Songs"/>
        </div>
    );

}

export default ButtonList;
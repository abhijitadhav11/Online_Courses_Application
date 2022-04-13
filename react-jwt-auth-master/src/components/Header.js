import React from "react";
import { Card, CardText } from "reactstrap";
function Header({ name, title }){
    return(
        <div>
            <Card className="my-2 bg-warning">
                <CardText>
                <h1 className="text-center my-4">Welcome to Courses</h1>
                </CardText>
            </Card>
            
        </div>
    );
}
export default Header;

import React, { useEffect } from 'react';
import { ModalHeader,Container,Button, OffcanvasHeader,Card,CardImg,CardImgOverlay,CardTitle,CardText } from 'reactstrap';

const CourseHome=()=>{
    useEffect(()=>{
        document.title="Home || Learncode";
    },[])
    return(
        <div>
{/*<OffcanvasHeader>
    <h1 className="text-center">Learncode </h1>
    <p className="text-center">
        Online platform for software professionals and students
    </p>
    <Container className="text-center" >
        <Button color="primary" outline>Start Using</Button>
    </Container>
</OffcanvasHeader>*/}

  <Card inverse>
    <CardImg
      alt="Card image cap"
      src="https://images.pexels.com/photos/4050439/pexels-photo-4050439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      width="100%"
    />
    <CardImgOverlay>
    <h1 className="text-center"><strong> Learncode </strong> </h1>
    <p className="text-center">
       <strong> Online platform for software professionals and students</strong>
    </p>
    </CardImgOverlay>
  </Card>
</div>
        
    )
};
export default CourseHome;
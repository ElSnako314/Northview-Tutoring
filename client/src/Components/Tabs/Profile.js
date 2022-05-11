import {Card} from 'reactstrap';
import {CardBody} from 'reactstrap';
import {CardTitle} from 'reactstrap';
import {CardSubtitle} from 'reactstrap';
import {CardText} from 'reactstrap';
import {Button} from 'reactstrap';

export default function About() {
  return (
    <div>
      <Card id = "card"
        color="warning"
      >
        <CardBody>
          <CardTitle tag="h1">
              Name:
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h2"
          >
            Tutor Status:
          </CardSubtitle>
          <CardText>
            Tutor Session
          </CardText>
          <Button>
            Button
          </Button>
        </CardBody>
      </Card>
    </div>
        //Northview Tutoring Profile Page
    )
}
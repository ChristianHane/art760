import React from "react";
import API from "../../utils/API";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class AddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      businessName: "",
      streetAddress: "",
      suite: "",
      zipCode: "",
      phone: "",
      website: "",
      category: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      showModal: false
    });

    saveBusiness = async () => {
      try {
        const newBusiness = {
          name: this.state.businessName,
          streetAddress: this.state.address,
          suite: this.state.suite,
          zipCode: this.state.zipCode,
          phone: this.state.phone,
          website: this.state.website,
          category: this.state.category
        };
        await API.addBusiness(newBusiness);
        this.setState({
          showModal: false,
          businessName: "",
          streetAddress: "",
          zipCode: "",
          phone: "",
          website: "",
          category: ""
        });
      } catch (err) {
        console.log(err);
      }
    };
  }
  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const externalCloseBtn = (
      <button
        className="close"
        style={{ position: "absolute", top: "15px", right: "15px" }}
        onClick={this.toggle}
      >
        &times;
      </button>
    );
    var buttonStyle = {
      paddingTop: "20px"
    };
    return (
      <div className="container">
        <div style={buttonStyle}>
          <Button color="danger" onClick={this.toggle}>
            Add Business
          </Button>
          <Modal
            isOpen={this.state.showModal}
            toggle={this.toggle}
            className={this.props.className}
            external={externalCloseBtn}
          >
            <ModalHeader>{this.props.game.name}</ModalHeader>
            <ModalBody>
              <Form style={{ width: "90%", marginLeft: "5%", marginTop: "2%" }}>
                <FormGroup>
                  <Label for="businessName">Business name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="amountOfPlayersNeeded"
                    placeholder="zipCode"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="streetAddress">Street Address</Label>
                  <Input
                    type="text"
                    name="streetAdress"
                    placeholder="Street Address"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="suite">Suite/Unit #</Label>
                  <Input type="number" name="suite" placeholder="Suite/Unit" />
                </FormGroup>
                <FormGroup>
                  <Label for="zipCode">Zip Code</Label>
                  <Input type="text" name="zipCode" placeholder="Zip Code" />
                </FormGroup>
                <FormGroup>
                  <Label for="phone">Phone Number(just numbers)</Label>
                  <Input
                    type="number"
                    name="phone"
                    placeholder="ex. 7607777777"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="website">Website</Label>
                  <Input type="text" name="website" placeholder="Website" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelectMulti">Select Multiple</Label>
                  <Input
                    type="select"
                    name="selectMulti"
                    id="exampleSelectMulti"
                    multiple
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                  </Input>
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.saveBusiness}>
                Submit
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default AddModal;

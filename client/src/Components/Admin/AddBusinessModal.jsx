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
  Input,
  CustomInput
} from "reactstrap";
import CheckBox from "../CheckBoxes";

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
      category: []
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  addCategory = value => {
    let { category } = this.state;
    if (!category || category.length === 0) {
      this.setState({ category: [value] });
    } else {
      this.setState({ ...this.state, category: [...this.state.category, value] });
    }
  };

  removeCategory = value => {
    const { category } = this.state;
    const index = category.indexOf(value);
    if (index > -1) {
      category.splice(index, 1);
    }
    this.setState({ category });
  };

  saveBusiness = async () => {
    try {
      const newBusiness = {
        name: this.state.businessName,
        streetAddress: this.state.streetAddress,
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
        category: []
      });
    } catch (err) {
      console.log(err);
    }
  };

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
            <ModalHeader>Add Business</ModalHeader>
            <ModalBody>
              <Form style={{ width: "90%", marginLeft: "5%", marginTop: "2%" }}>
                <FormGroup>
                  <Label for="businessName">Business name</Label>
                  <Input
                    type="text"
                    name="businessName"
                    placeholder="Business name"
                    value={this.state.businessName}
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="streetAddress">Street Address</Label>
                  <Input
                    type="text"
                    name="streetAddress"
                    placeholder="Street Address"
                    value={this.state.streetAddress}
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="suite">Suite/Unit #</Label>
                  <Input
                    type="number"
                    name="suite"
                    placeholder="Suite/Unit"
                    value={this.state.suite}
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="zipCode">Zip Code</Label>
                  <Input
                    type="text"
                    name="zipCode"
                    placeholder="Zip Code"
                    value={this.state.zipCode}
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="phone">Phone Number(just numbers)</Label>
                  <Input
                    type="number"
                    name="phone"
                    placeholder="ex. 7607777777"
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="website">Website</Label>
                  <Input
                    type="text"
                    name="website"
                    placeholder="Website"
                    value={this.state.website}
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="category">Categories</Label>
                  <div>
                    <CheckBox
                      category="Category1"
                      addCategory={this.addCategory}
                      removeCategory={this.removeCategory}
                    />
                    <CheckBox
                      category="Category2"
                      addCategory={this.addCategory}
                      removeCategory={this.removeCategory}
                    />
                    <CheckBox
                      category="Category3"
                      addCategory={this.addCategory}
                      removeCategory={this.removeCategory}
                    />
                    <CheckBox
                      category="Category4"
                      addCategory={this.addCategory}
                      removeCategory={this.removeCategory}
                    />
                    <CheckBox
                      category="Category5"
                      addCategory={this.addCategory}
                      removeCategory={this.removeCategory}
                    />
                    <CheckBox
                      category="Category6"
                      addCategory={this.addCategory}
                      removeCategory={this.removeCategory}
                    />
                    <CheckBox
                      category="Category7"
                      addCategory={this.addCategory}
                      removeCategory={this.removeCategory}
                    />
                    <CheckBox
                      category="Category8"
                      addCategory={this.addCategory}
                      removeCategory={this.removeCategory}
                    />
                  </div>
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

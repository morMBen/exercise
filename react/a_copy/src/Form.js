import React from 'react';
import MyInput from './MyInput';
import TextTag from './TextTag';
import Select from './Select';
import MyButton from './MyButton';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { in1: 'Enter first name', in2: 'Enter last name', int3: 'Under 18', btn1: 'submit', btn2: 'return', formStatus: 'start' }
    }

    onChangeSomething = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.setState({ formStatus: 'check' })
    }

    // componentDidMount() {
    //     this.setForm();
    // }

    setForm = () => {
        if (this.state.formStatus === 'start') {
            return this.starter()
        } else if (this.state.formStatus === 'check') {
            return this.checking()
        } else {
            return this.endMassege();
        }
    }

    starter() {
        return (< form >
            <TextTag title="Please complete the survey" />
            <TextTag title="First Name" />
            <MyInput setId="in1" myType="text" change={this.onChangeSomething} val={this.state.in1} />
            <TextTag title="Last name" />
            <MyInput setId="in2" myType="text" change={this.onChangeSomething} val={this.state.in2} />
            <Select setId="int3" change={this.onChangeSomething} val={this.state.int3} />
            <MyButton setId="in4" change={this.onSubmit} buttonText="Submit" />
        </form >)
    }
    checking() {
        return (<div>
            <TextTag title="Cheack your submit last time" />
            <TextTag title={`Your name is ${this.state.in1}?`} />
            <TextTag title={`Your last name is ${this.state.in2}?`} />
            <TextTag title={`Your age is ${this.state.int3.toLowerCase()}?`} />
            <MyButton setId="in4" change={() => { this.setState({ formStatus: "start" }) }} buttonText="return" />
            <MyButton setId="in5" change={() => { this.setState({ formStatus: "end" }) }} buttonText="Its me" />
        </div>
        )
    }
    endMassege() {
        return (
            <TextTag title={`All right we did it ${this.state.in1}`} />
        )
    }
    render() {
        return (
            <div>{this.setForm()}</div>
        )
    }
}

export default Form;
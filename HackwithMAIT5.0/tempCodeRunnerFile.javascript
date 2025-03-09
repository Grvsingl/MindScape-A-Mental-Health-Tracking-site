state={
    value:1
 }
 componentDidMount() {
    console.log("Mounted")
    this.setState({value:2})  
 }
 render() {
    console.log("Rendered")
    return (
       <div>
         Hi
       <div/>
    )}
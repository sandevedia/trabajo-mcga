import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class TottyApp extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        counter:0,
        UpCount:0,
        DownCount:0,
        probabilidad:''
      }
      this.handleUp = this.handleUp.bind(this);
      this.handleDown = this.handleDown.bind(this);
      this.handleReset = this.handleReset.bind(this);
      this.Calculate = this.Calculate.bind(this);
    }

  handleUp(){
    if(this.state.counter < 10){
      this.setState(prevState => ({
        counter: (prevState.counter + 1),
        UpCount: (prevState.UpCount + 1)
      }))
    }
    this.Calculate();
  }

  handleDown(){
    if(this.state.counter < 10){
      this.setState(prevState => ({
        counter: (prevState.counter + 1),
        DownCount: (prevState.DownCount + 1)
      }))
    }
    this.Calculate();
  }

  handleReset(){
    this.setState({
      counter:0,
      UpCount:0,
      DownCount:0,
    })
  }

  Calculate(){
    let _probabilidad = false
    if(this.state.UpCount <= 3){
      _probabilidad = 'BAJO'
    }else if(this.state.UpCount <=5){
      _probabilidad = 'MEDIA-BAJA'
    }else if(this.state.UpCount <= 6){
      _probabilidad = 'MEDIA'
    }else if(this.state.UpCount <= 7){
      _probabilidad = 'MEDIA-ALTA'
    }else{
      _probabilidad = 'ALTA'
    }
    this.setState({
      probabilidad: _probabilidad
    })
  }

	render() {
		return (

      <div style={{ marginTop:'10px', width:'80%', marginLeft:'10%', borderColor:'#0096b3', borderWidth:1, paddingHorizontal:'5%', paddingBottom:'5%', borderRadius:5  }}>
        <div>
            Alar Counter
            <div>
              <button type="button" onClick={this.handleUp} style={{ marginTop:'15px', backgroundColor:'black', alignItems:'center', color:'white', width:'100%', height:'60px' }}>
                UP
              </button>
            </div>
            <div>
              <button type="button" onClick={this.handleDown} style={{ marginTop:'15px', backgroundColor:'black', alignItems:'center', color:'white', width:'100%', height:'60px' }}>
                DOWN
              </button> 
            </div>
        </div>
        <div style={{ marginTop:'10px', width:'100%', marginLeft:'40%', paddingHorizontal:'5%', paddingBottom:'5%', borderRadius:5 }}>
          Contador: {this.state.counter} 
        </div>
        <div style={{ marginTop:'10px', flex:1, marginLeft:'10%', width:'80%', marginBottom:'10%', borderColor:'#0096b3', borderWidth:1, paddingHorizontal:'5%', paddingBottom:'5%', borderRadius:5 }}>
          <div>
            <p>Up:</p>
            <div style={{ backgroundColor:'blue', height:'20px', width:this.state.UpCount*20, marginTop:'10px' , color:'white'}}>
              {this.state.UpCount}
            </div>
          </div>
          <div style={{marginTop:'10px'}}>
            <p>Down:</p>
            <div style={{ backgroundColor:'red', height:'20px', width:this.state.DownCount*20, marginTop:'10px', color:'white'}}>
              {this.state.DownCount}
            </div>
          </div>
          {this.state.counter != 10 ? null :
          <p style={{fontSize:20, fontWeight:'bold', marginLeft:'35%'}}>
            {this.state.probabilidad}
          </p>
        }
        </div>
       
        <div style={{  marginBottom:20, marginTop:50, marginLeft:'40%'}}>
          <button type="button"  style={{borderColor:'gray',backgroundColor:'#0096b3', borderWidth:1, width:'40%', borderRadius:50, height:50, justifyContent:'center', color:'white'}}
          onClick={this.handleReset}
          >
            Reset
          </button>
        </div>
      </div>
		);
	}
}

export default TottyApp;

      /*<View style={ styles.container }>
        <View style={{ marginTop:50, width:'80%', marginLeft:'10%', borderColor:'#0096b3', borderWidth:1, paddingHorizontal:'5%', paddingBottom:'5%', borderRadius:5  }}> 
          <Text style={{ alignSelf:'center' }}>Alar Counter</Text>
          <TouchableOpacity style={{ marginTop:15, backgroundColor:'black', alignItems:'center' }}
            onPress={this.handleUp}
          >
            <Text style={{ color:'white', fontSize:30 }}>Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop:10, backgroundColor:'black', alignItems:'center' }}
            onPress={this.handleDown}
          >
            <Text style={{ color:'white', fontSize:30 }}>Down</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop:10, width:'80%', marginLeft:'10%', paddingHorizontal:'5%', paddingBottom:'5%', borderRadius:5, alignItems:"center" }}>
          <Text style={{ color:'#0096b3', fontSize: 20, justifyContent:'center', paddingTop:10}}>Contador: {this.state.counter}</Text>
        </View>
        <View style={{ marginTop:10, flex:1, marginLeft:'10%', width:'80%', marginBottom:'10%', borderColor:'#0096b3', borderWidth:1, paddingHorizontal:'5%', paddingBottom:'5%', borderRadius:5  }}>
          <Text style={{ color:'#0096b3', fontSize: 20 }}>Total:</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{ height:20, marginTop:10, width:50}}>UP</Text>
            <View style={{ backgroundColor:'blue', height:20, width:this.state.UpCount*20, marginTop:10}}>
              <Text style={{color:'white', marginLeft:10}}>{this.state.UpCount}</Text>
            </View>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{ height:20, marginTop:10, width:50}}>DOWN </Text>
            <View style={{ backgroundColor:'red', height:20, width:this.state.DownCount*20, marginTop:10}}>
              <Text style={{color:'white', marginLeft:10}}>{this.state.DownCount}</Text>
            </View>
          </View>
        {this.state.counter != 10 ? null :
          <Text style={{fontSize:30, alignSelf:'center', marginTop:30, fontWeight:'bold'}}>
            {this.state.probabilidad}
          </Text>
        }
        </View>
        <View style={{ alignItems:'center', marginBottom:'10%'}}>
          <TouchableOpacity style={{borderColor:'gray',backgroundColor:'#0096b3', borderWidth:1, width:'20%', borderRadius:50, height:50, justifyContent:'center'}}
            onPress={this.handleReset}
          >
            <Text style={{ color:'white', fontSize: 20, alignSelf:'center' }}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
      */
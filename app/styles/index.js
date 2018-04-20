export const todos = StyleSheet.create({ 
    container : {
        flex : 1 , 
        flexDirection : 'column' 
    } ,  
    header : {
        alignItems : 'center' , 
        padding : 12 
    } , 
    innerContainer : {
        flex : 8 , 
        padding : 12 , 
        flexDirection : 'column' 
    } , 
    headerText : {
        fontSize : 24 , 
        marginTop  : 12 
    } , 
    textInput : {
        alignSelf : 'stretch' , 
        color : '#141516' , 
        padding : 16 , 
        backgroundColor  : '#E3F2FD' 
    } , 
    addButton : {
        width : 60 , 
        height : 60 , 
        position : 'absolute' , 
        zIndex : 11 , 
        right : 24 , 
        bottom : 88 , 
        backgroundColor : '#1DE9B6' , 
        borderRadius : 50 , 
        alignItems : 'center' , 
        justifyContent : 'center' 
    }, 
    addButtonText : {
        color : 'white' , 
        fontSize : 24
    }
  });
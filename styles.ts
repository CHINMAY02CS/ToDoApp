
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop:20,
    marginBottom:10,
    paddingBottom:10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingLeft:18,
    paddingRight:18,
    paddingTop:6,
    paddingBottom:6,
    display:'flex',
    backgroundColor:'white'
  },
  inputBox: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#102C57',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#29ADB2',
    textAlign: 'center',
    padding:58
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    color: '#176B87',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#2D9596', 
    borderRadius: 8, 
    paddingVertical: 12, 
    paddingHorizontal: 20,
    marginTop: 10, 
    alignItems: 'center', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold', 
  },
  taskList: {
    alignItems: 'center', 
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%', 
    marginBottom: 10,
    fontSize:14,
    backgroundColor:'#E3F4F4',
    padding:10,
    borderRadius:8,
  },
  task: {
    flex: 1,
    fontSize: 14,
    marginLeft: 10,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  completeButton: {
    backgroundColor: '#2D9596',
    borderRadius: 8,
    padding: 5,
    marginRight: 5,
    paddingVertical: 12, 
    paddingHorizontal: 20, 
    marginTop: 10, 
    alignItems: 'center', 
  },
  deleteButton: {
    backgroundColor: '#074173',
    borderRadius: 8,
    padding: 5,
    marginRight: 5,
    paddingVertical: 12, 
    paddingHorizontal: 20, 
    marginTop: 10, 
    alignItems: 'center', 
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    backgroundColor:'#9AC8CD'
  },
  
  
  
});
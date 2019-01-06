const initState = {
  projects:[
    {id: '1', title: 'Title 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {id: '2', title: 'Title 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {id: '3', title: 'Title 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
  ]
};

const projectReducer = (state = initState, action) =>{
  switch(action.type){
    case 'CREATE_PROJECT':
          console.log('created project', action.project);
          return state;
    case 'CREATE_PROJECT_ERROR':
          console.log('error occured', action.err);
          return state;
    default:
          return state;
  }
}

export default projectReducer;
const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc, collection, addDoc, getDoc, getDocs, query, limit, updateDoc, deleteDoc, where, arrayUnion } = require('firebase/firestore');


const firebaseApp = initializeApp({
    apiKey: "AIzaSyBxaN3JBbg7Gu-w7QenFfPXxFcQ9iayk5c",
    authDomain: "diploms-c3e44.firebaseapp.com",
    databaseURL: "https://diploms-c3e44-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "diploms-c3e44",
    storageBucket: "diploms-c3e44.appspot.com",
    messagingSenderId: "882993330674",
    appId: "1:882993330674:web:0d9d83ed3331be84c2936b"
  });


const firestore = getFirestore()


const express = require("express");
const cors = require('cors')
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/dist`))
app.use(cors())

app.listen(10000, ()=> console.log("http://localhost:10000"));

const usersCollection = collection(firestore, 'users')
const projectsCollection = collection(firestore, 'projects')
const requestsCollection = collection(firestore, 'requests')
const sprintsCollection = collection(firestore, 'sprints')




/* User -------------------------------------------------------------------------------------------------------------------------------*/

app.post('/api/users/create', function (req, res) {
  let request = req.body
    
  addDoc(usersCollection, {
    firstName: request.firstName,
    lastName: request.lastName,
    username: request.username,
    password: request.password,
    photo: request.photo,
    id: '',
    projectId: ''
  })

    .then(()=>{
      res.send({
        status: "ok"
      });
    })
    .catch((error) => {
      res.send({error});
    })
})

app.post('/api/users/authenticate', function (req, res) {
    postUsers(req, res)
});

 async function postUsers(req, res) {
  const { username, password } = req.body;
  const myUserQuery = query( 
  collection(firestore, 'users'),
  limit()
);
 
  let userSet = [];

  const myCollection = await getDocs(myUserQuery);
    myCollection.forEach((element)=>{
      let userData = element.data()
      userData['id'] = element.id
      userSet.push(userData)
      results = userSet;
    })

  const user = results.find(x => x.username == username && x.password == password);

  if (user != null) {
    res.send({
      results: user
   })
 } else {
    res.sendStatus(400);
    res.send({errors: 'errors'});
  }  
 }

app.get('/api/users/', function (req, res) {

  getUsers(req, res)
});

 async function getUsers(req, res) {
  const myUserQuery = query( 
  collection(firestore, 'users'),
  limit()
);

  let results = [];
  let param = [];
  const myCollectionUsers = await getDocs(myUserQuery);
    myCollectionUsers.forEach((element)=>{
      let usersData = element.data()
      usersData['id'] = element.id
      delete usersData.password
      param.push(usersData)
      results = param;
    })

  res.send({
    results
  })
}

app.get('/api/user/:id', function (req, res) {
  getUser(req, res)
});

 async function getUser(req, res) {
  const userId = req.params.id
  const ref = doc(firestore, 'users', userId)
  const myCollectionUserId = await getDoc(ref)

  if(myCollectionUserId.exists()){
    res.send({
      firstName: myCollectionUserId.data().firstName,
      lastName: myCollectionUserId.data().lastName,
      id: userId,
      photo: myCollectionUserId.data().photo,
      username: myCollectionUserId.data().username,
      projectId: myCollectionUserId.data().projectId,
   }) 
  }
   else {
    res.send({
      error: 'error user'
    });
   }
  }

  app.put('/api/user/:id', function (req, res) {
    putUser(req, res)
  });
  
    async function putUser(req, res) {
    const userId = req.params.id
    const userData = req.body
    const myCollectionUsersId = doc(firestore, 'users', userId)

    await updateDoc (
      myCollectionUsersId, {
        firstName: userData.firstName,
        lastName: userData.lastName,
        photo: userData.photo,
        username: userData.username,
        id: userId
      }
    )

    .then(()=>{
      res.send({
        firstName: userData.firstName,
        lastName: userData.lastName,
        id: userData.id,
        photo: userData.photo,
        username: userData.username,
      }) 
    })
    .catch((error) => {
      res.send({error});
    })
  }

  app.delete('/api/user/:id', function (req, res) {
    deleteUser(req, res)
  });
  
   async function deleteUser(req, res) {
    const userId = req.params.id
    const myCollectionUsersId = doc(firestore, 'users', userId)

    await deleteDoc(myCollectionUsersId)

    .then(()=>{
      res.send({
        status: "ok"
     }) 
    })
    .catch((error) => {
      res.send({error});
    })
    putReqUser(req, res)
  }

/* Projects -------------------------------------------------------------------------------------------------------------------------------*/

app.get('/api/projects/', function (req, res) {

  getProjects(req, res)
});

 async function getProjects(req, res) {
  const myProjectsQuery = query( 
  collection(firestore, 'projects'),
  limit()
);

  let results = [];
  let param = [];
  const myCollectionProjects = await getDocs(myProjectsQuery);
   myCollectionProjects.forEach((element)=>{
    let projectsData = element.data()
    projectsData['id'] = element.id
    param.push(projectsData)
    results = param;
  })
    res.send({
      results
   }) 
}

app.post('/api/project/register', function (req, res) {

  registerProjects(req, res)
})

async function registerProjects(req, res) {
  let request = req.body

  const myProjectsQuery = query( 
    collection(firestore, 'projects'),
    limit()
  );

  let paramRes = 0;
  let param = [];
  const myCollectionProjects = await getDocs(myProjectsQuery);
    myCollectionProjects.forEach((element)=>{
    param.push(element.data())
    
    paramRes = param.length;
  })

    addDoc(projectsCollection, {
      verbose_name: request.verbose_name,
      description: request.description,
      active: request.active,
      user_create: request.user,
      number_project: paramRes + 1,
      sprint: "",
      board: [],
      tasks: []
    })

    .then(()=>{
      res.send({
        verbose_name: request.verbose_name,
        description: request.description,
        active: request.active,
        user_create: request.user,
        projectId: '',
        sprint: "",
        board: [],
        tasks: []
      });
    })

    .catch((error) => {
      res.send({error});
      res.sendStatus(400)
    })
  }

  app.put('/api/project/:id', function (req, res) {
    putProject(req, res)
  });
  
   async function putProject(req, res) {
    const projectsId = req.params.id
    const usersId = req.body.id
    const myCollectionUsersId = doc(firestore, 'users', usersId)


    await updateDoc (
      myCollectionUsersId, {
        projectId: projectsId
      }
    )

    .then(()=>{
      res.send({
        projectId: projectsId
     }) 
    })
    .catch((error) => {
      res.send({error});
    })
  }
  

  app.delete('/api/project/:id', function (req, res) {
    deleteProject(req, res)
  });
  
   async function deleteProject(req, res) {
    const projectDeleteId = req.params.id
    const myCollectionProjects = doc(firestore, 'projects', projectDeleteId)


    await deleteDoc(myCollectionProjects)

    .then(()=>{
      res.send({
        status: "ok"
     }) 
    })
    .catch((error) => {
      res.send({error});
    })
  }



  app.get('/api/project/:id', function (req, res) {
    getProjectId(req, res)
  });
  
    async function getProjectId(req, res) {
    const projectId = req.params.id
    const ref = doc(firestore, 'projects', projectId)
    const myCollectionProjectId = await getDoc(ref)

    if(myCollectionProjectId.exists()){
      res.send({
        results: myCollectionProjectId.data()
      }) 
    }
    else {
      res.send({
        error: 'error project'
      });
    }
  }

  app.get('/api/project/requests/:id', function (req, res) {
    getProjectRequests(req, res)
  });
  
    async function getProjectRequests(req, res) {
    const requestsId = req.params.id
    const myRequestsQuery = query( 
      collection(firestore, 'requests'),
      limit()
    );
  
    let param = [];
    let results = [];
    const myCollectionRequestsId = await getDocs(myRequestsQuery);

    myCollectionRequestsId.forEach((element)=>{
      if(element.data().projectId == requestsId){
        let requestsData = element.data()
        requestsData['id'] = element.id
        param.push(requestsData)
        results = param;
      }
    })     
    res.send({
      results: results  ? results : []
    })                      
  }
  
  app.get('/api/project/:id/sprint', function (req, res) {

    getSprint(req, res)
  });
  
  async function getSprint(req, res) {
    const collectionProjectId = req.params.id
    
    const mySprintsQuerySe = query( 
      collection(firestore, 'sprints'),
      where('projectId', '==', collectionProjectId),
      limit()
    );
    const myCollectionSprintsMy = await getDocs(mySprintsQuerySe);

    let param = [];
    let results = [];
    let projectsData = [];
    myCollectionSprintsMy.forEach(async(element)=>{
      projectsData = element.data()
      projectsData['id'] = element.id
      param.push(projectsData)
      results = param
    
    })

    results = results.sort((a,b) => {
      return a.number < b.number ? 1 : a.number === b.number ? 0 : -1;
    });

    res.send({
      results: results  ? results[0] : []
    }) 
  }

    /* Requests -------------------------------------------------------------------------------------------------------------------------------*/

  app.put('/api/requests/user/:id', function (req, res) {
    putReqUser(req, res)
  });
  
    async function putReqUser(req, res) {
    const userId = req.params.id
    const userData = req.body


    const myRequestsQuery = query( 
      collection(firestore, 'requests'),
      where('username.id', '==', userId),
      limit(),
    );

    const myCollectionProjectId = await getDocs(myRequestsQuery)

    myCollectionProjectId.forEach(async (element) => {

    let new_data = element.data()
    new_data.username = userData
    const myCollectionUsersUpdate = doc(firestore, 'requests', element.id)      
    
    if(Object.keys(userData).length == 0){
      await updateDoc (
        myCollectionUsersUpdate, {
          username: ""
        }
      )
    } if (Object.keys(userData).length != 0) {
      await updateDoc (
        myCollectionUsersUpdate, {
          username: {
          firstName: userData.firstName,
          lastName: userData.lastName,
          photo: userData.photo,
          username: userData.username,
          password: userData.password,
          id: userId
          }
        }
      )
    }
  })
  }

  app.get('/api/requests/:id', function (req, res) {

    getRequests(req, res)
  });
  
    async function getRequests(req, res) {
    let requestId = req.params.id

    const myRequestsQuery = query( 
    collection(firestore, 'requests'),
    limit()
  );
  
    let results = [];
    let param = [];
    const myCollectionRequests = await getDocs(myRequestsQuery);
    myCollectionRequests.forEach((element)=>{
      if(element.data().projectId == requestId){
        let requestsData = element.data()
        requestsData['id'] = element.id
        param.push(requestsData)
        results = param;
      }
    })
      res.send({
        results
      }) 
  }

  app.get('/api/requests/:id/new', function (req, res) {

    getRequestsNew(req, res)
  });
  
    async function getRequestsNew(req, res) {
    let projectId = req.params.id

    const myRequestsQuery = query( 
    collection(firestore, 'requests'),
    limit()
  );
  
    let results = [];
    let param = [];
    const myCollectionRequests = await getDocs(myRequestsQuery);
    myCollectionRequests.forEach((element)=>{
      if(element.data().projectId == projectId && element.data().blackboard == false){
        let requestsData = element.data()
        requestsData['id'] = element.id
        param.push(requestsData)
        results = param;
      }
    })
      res.send({
        results
      }) 
  }

  app.post('/api/request/register', function (req, res) {

    registerRequest(req, res)
  })
    
  async function registerRequest(req, res) {
      let request = req.body

    const myRequestsQuery = query( 
      collection(firestore, 'requests'),
      limit()
    );
  
    let paramRes = 0;
    let param = [];
    const myCollectionRequests = await getDocs(myRequestsQuery);
      myCollectionRequests.forEach((element)=>{
      let requestsData = element.data()
      param.push(requestsData)       
      paramRes = param.length;
    })
        
    addDoc(requestsCollection, {
      verbose_name: request.verbose_name,
      description: request.description,
      status: request.status,
      username: request.username ? request.username : '',
      blackboard: request.blackboard,
      projectId: request.projectId,
      number: paramRes + 1,
      subtasks: []
    })
  
    .then(()=>{
      res.send({
        verbose_name: request.verbose_name,
        description: request.description,
        status: request.status,
        username: request.username.id,
        projectId: request.projectId,
        blackboard: request.blackboard,
      });
    })
    .catch((error) => {
      res.send({error});
    })
  }

  app.delete('/api/request/:id', function (req, res) {
    deleteRequest(req, res)
  });
  
    async function deleteRequest(req, res) {
    const requestDeleteId = req.params.id
    const myCollectionRequests = doc(firestore, 'requests', requestDeleteId)


    await deleteDoc(myCollectionRequests)

    .then(()=>{
      res.send({
        status: "ok"
      }) 
    })
    .catch((error) => {
      res.send({error});
    })
  }


  app.get('/api/requests/user/:id', function (req, res) {
    getRequestsUserId(req, res)
  });
  
    async function getRequestsUserId(req, res) {
    const requestsId = req.params.id
    const myRequestsQuery = query( 
      collection(firestore, 'requests'),
      limit()
    );
  
    let param = [];
    let results = [];
    const myCollectionRequestsId = await getDocs(myRequestsQuery);

    myCollectionRequestsId.forEach((element)=>{
      if(element.data().username.id == requestsId){
      let requestsData = element.data()
      requestsData['id'] = element.id
      param.push(requestsData)
      results = param;
    }
    })   
    res.send({
      results: results ? results : []
    })                 
  }

  /* Sprint -------------------------------------------------------------------------------------------------------------------------------*/

  app.post('/api/sprint', function (req, res) {

    registerSprint(req, res)
  })
  
  async function registerSprint(req, res) {
    let request = req.body
    const mySprintsQuery = query( 
      collection(firestore, 'sprints'),
      where('projectId', '==', request.projectId),
      limit()
    );
  
    let paramRes = 0;
    let param = [];
    let id = ''
    const myCollectionSprints = await getDocs(mySprintsQuery);

    myCollectionSprints.forEach(async (element)=>{
      let sprintsData = element.data()
      param.push(sprintsData)  
      paramRes = param.length;

    })
    

    addDoc(sprintsCollection, {
      verbose_name: request.verbose_name,
      active: request.active,
      startingDate: request.startingDate,
      endDate: request.endDate,
      tasks: [],
      projectId: request.projectId,
      number: paramRes + 1,
    })

    res.send({
      verbose_name: request.verbose_name,
      active: request.active,
      startingDate: request.startingDate,
      endDate: request.endDate,
      tasks: [],
      projectId: request.projectId,
      number: paramRes + 1,
    })

  
    updateProject(req, res, paramRes)
    updateSprints(req, res, paramRes)
}


 async function updateSprints(req, res, paramRes) {
  let request = req.body

  const mySprintsQuery = query( 
    collection(firestore, 'sprints'),
    where('projectId', '==', request.projectId),
    limit()
  );

  const myCollectionSprints = await getDocs(mySprintsQuery);

  myCollectionSprints.forEach(async (element)=>{
    if(element.data().number != paramRes + 1){
      const mySprintsUpdate = doc(firestore, 'sprints', element.id)  

      await updateDoc (
        mySprintsUpdate, {
          active: false
        })
      } 
    })
  }


  async function updateProject(req, res, paramRes) {
   let request = req.body

   const myCollectionProjectUpdate = doc(firestore, 'projects', request.projectId)  

    await updateDoc (
      myCollectionProjectUpdate, {
       sprint: {
        verbose_name: request.verbose_name,
        active: request.active,
        startingDate: request.startingDate,
        endDate: request.endDate,
        tasks: [],
        projectId: request.projectId,
        number: paramRes + 1,
       }
      }
    )
  }

  app.post('/api/sprint/:id', function (req, res) {

    addTaskSprint(req, res)
  })

  async function addTaskSprint(req, res) {
    const sprintTask = req.body
    const sprintId = req.params.id

    const mySprintsQuery = query( 
      collection(firestore, 'sprints'),
      limit()
    );

    const myCollectionSprintsUpdate = await getDocs(mySprintsQuery) 
    let tasksValue = []
    myCollectionSprintsUpdate.forEach(async(element)=>{
      if(element.id == sprintId){
        let sprintsData = element.data()
        sprintsData.tasks.push(sprintTask.task)
        tasksValue = sprintsData.tasks;
      }
    })

    const myCollectionProjectUpdate = doc(firestore, 'sprints', sprintId)  

    await updateDoc (
      myCollectionProjectUpdate, { 
        tasks: tasksValue,
      }
    )

    const myCollectionRequestsUpdate = doc(firestore, 'requests', sprintTask.task.id)  
    await updateDoc (
      myCollectionRequestsUpdate, { 
        blackboard: true,
      }
    )

    .then(()=>{
      res.send({
        status: "ok"
     }) 
    })
    .catch((error) => {
      res.send({error});
    })
  }

  app.post('/api/sprint/subtask/:id', function (req, res) {

    addSubTaskSprint(req, res)
  })

  async function addSubTaskSprint(req, res) {
    const sprintSubTask = req.body
    const sprintId = req.params.id

    const mySprintsQuery = query( 
      collection(firestore, 'sprints'),
      limit()
    );

    const myCollectionSprintsUpdate = await getDocs(mySprintsQuery) 

    let tasksValue = [];
    myCollectionSprintsUpdate.forEach(async(element)=>{
      if(sprintId == element.id) {
        tasksValue.push(element.data().tasks)
      }
    })

    tasksValue[0].forEach(async (el)=> {
      if(el.id == sprintSubTask.task){
        el.subtasks.push(sprintSubTask)
      }     
    })

    const myCollectionSprintsStateUpdate = doc(firestore, 'sprints', sprintId)  

    await updateDoc (
      myCollectionSprintsStateUpdate, { 
        tasks: tasksValue[0],
      }
    )
    
    .then(()=>{
      res.send({
        status: "ok"
     }) 
    })
    .catch((error) => {
      res.send({error});
    })
  }

  app.put('/api/sprint/:id/modify', function (req, res) {

    modifySprint(req, res)
  })

  async function modifySprint(req, res) {
    const sprintSubTask = req.body
    const sprintId = req.params.id

    const mySprintsQuery = query( 
      collection(firestore, 'sprints'),
      limit()
    );

    const myCollectionSprintsUpdate = await getDocs(mySprintsQuery) 

    let tasksValue = [];
    let subTasksValue = [];
    myCollectionSprintsUpdate.forEach(async(element)=>{
      if(sprintId == element.id) {
        tasksValue = element.data().tasks
      }
    })

    tasksValue.forEach(async (el)=> {
      if(el.id == sprintSubTask.task){    
        subTasksValue = el.subtasks
      }     
    })

    subTasksValue.forEach(async (el)=> {
      if(el.id == sprintSubTask.id){
        el.status = sprintSubTask.status
      }     
    })
    const myCollectionSprintsStateUpdate = doc(firestore, 'sprints', sprintId)  

    await updateDoc (
      myCollectionSprintsStateUpdate, { 
        tasks: tasksValue,
      }
    )
    
    .then(()=>{
      res.send({
        status: "ok"
     }) 
    })
    .catch((error) => {
      res.send({error});
    })
  }

   app.put('/api/sprint/:id/tasks/modify', function (req, res) {

    modifySprintTask(req, res)
  })

  async function modifySprintTask(req, res) {
    const sprintSubTasks = req.body
    const sprintId = req.params.id

    const mySprintsQuery = query( 
      collection(firestore, 'sprints'),
      limit()
    );

    const myCollectionSprintsUpdateTask = await getDocs(mySprintsQuery) 

    let tasksValue = [];
    let subTasksValue = [];
    myCollectionSprintsUpdateTask.forEach(async(element)=>{
      if(sprintId == element.id) {
        tasksValue = element.data().tasks

      }
    })

    tasksValue.forEach(async (el)=> {
      if(el.id == sprintSubTasks.id){  
        el.status = sprintSubTasks.status
      }     
    })

    const myCollectionSprintsTaskUpdate = doc(firestore, 'sprints', sprintId)  

    await updateDoc (
      myCollectionSprintsTaskUpdate, { 
        tasks: tasksValue,
      }
    )

    const myCollectionSprintsRequerstUpdate = doc(firestore, 'requests', sprintSubTasks.id)  

    await updateDoc (
      myCollectionSprintsRequerstUpdate, { 
        status: sprintSubTasks.status,
      }
    )
    
    .then(()=>{
      res.send({
        status: "ok"
     }) 
    })
    .catch((error) => {
      res.send({error});
    })
  }

  app.get('/api/sprints/:id', function (req, res) {
    getSprintsAll(req, res)
  });
  
   async function getSprintsAll(req, res) {
    const projectId = req.params.id
    const mySprintsQuery = query( 
      collection(firestore, 'sprints'),
      where('projectId','==', projectId),
      limit()
    );

    const myCollectionSprints = await getDocs(mySprintsQuery)
    let param = [];
    let results = [];
    myCollectionSprints.forEach(async(element)=>{
      let projectsData = element.data()
      projectsData['id'] = element.id
      param.push(projectsData)
      results = param
    })

    res.send({
      results: results  ? results : []
   }) 
  }

  app.post('/api/users/:id/task', function (req, res) {
    appTaskUser(req, res)
  });
  
   async function appTaskUser(req, res) {
    const taskUserId = req.params.id
    const taskUserBody = req.body

    const myCollectionTaskUserUpdate = doc(firestore, 'requests', taskUserId) 

    await updateDoc (
      myCollectionTaskUserUpdate, { 
        username: taskUserBody[0]
      }
    )

    .then(()=>{
      res.send({
        results: taskUserBody[0]
     }) 
    })
    .catch((error) => {
      res.send({error});
    })

  }





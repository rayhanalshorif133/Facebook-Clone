const sessionController = {};



// Create a new session
sessionController.createSession = (name,data) => {

   localStorage.setItem(name, JSON.stringify(data));



};


export default sessionController;
import TodoItem from './todo';


export default class Project {
  static __APPID = "Christopher";
  static PROJECTS = {"Default": true};

  constructor(projectName) {
    this.projectName = projectName;
    Project.updateProjectList();
  }

  static updateProjectList(newProject) {
    Project.PROJECTS[newProject] = true;
    this.saveProjectList();
  }

  static saveProjectList() {
    const projectList = Object.keys(Project.PROJECTS);
    const projectData = {
      appid: Project.__APPID,
      projects: projectList
    };
    localStorage.setItem("projectList", JSON.stringify(projectData));
  }

  static loadProjectList() {
    const projectData = localStorage.getItem("projectList");
    
    if (projectData) {
      try {
        const parsedData = JSON.parse(projectData);
        
        if (parsedData.appid === Project.__APPID) {
          parsedData.projects.forEach(project => {
            Project.PROJECTS[project] = true;
          });
        }
      } catch (e) {
        console.error("Error loading project list from localStorage:", e);
      }
    } else {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const item = localStorage.getItem(key);
    
        try {
          const parsedItem = JSON.parse(item);
    
          if (parsedItem.appid === TodoItem.__APPID && parsedItem.project) {
            Project.PROJECTS[parsedItem.project] = true;
          }
        } catch (e) {
          console.error(`Error parsing item with key "${key}":`, e);
        }
      }
    }
  }
}
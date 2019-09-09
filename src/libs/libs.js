export const libs = {
  getIdName: (jobLists, jobId) => {
    let id = null;
    jobLists.forEach(jobList => {
      if (jobList.id === jobId) {
        id = jobList.name;
      }
    });
    return id;
  },
  timeFormat: second => {
    return new Date(second * 1000).toISOString().slice(11, -2);
  },
  getCreaated: () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();

    return year + "/" + month + "/" + day + " " + hour + ":" + minute;
  }
};

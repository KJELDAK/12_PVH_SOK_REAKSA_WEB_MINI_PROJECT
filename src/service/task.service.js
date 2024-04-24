//Get task 
export const getTaskById= async (workspaceId) => {
    
    const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/tasks${workspaceId} `, {
      
      method: "GET",
      body: JSON.stringify(workspaceId),
      headers: {
        "Content-Type": "application/json",
        Authorization:`Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzcmVha3NhNDkyQGdtYWlsLmNvbSIsImlhdCI6MTcxMzk1MDE5MCwiZXhwIjoxNzEzOTY4MTkwfQ.hamXB1gs22XW5ybis4G0DorQLOFiMGTiM83OTLpmViI`
      },
    });
    const data = await res.json();
    return data;
  };
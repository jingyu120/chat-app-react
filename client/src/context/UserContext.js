import React, { useEffect, useState } from "react";

const UserContext = React.createContext("");

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!user) {
      setUser(JSON.parse(localStorage.getItem("userData")));
    }
  }, [user]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;

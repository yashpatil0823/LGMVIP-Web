import React from 'react'
const Users = ({loading,users}) => {
    return loading ? (   
              <div className='snail'>
              <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw340" alt="Loaading.." className={loading?"loading":"unloading"}/>
          </div>
        ) : 
        (
          <div id="main">
    
          {users.map(user =>
                      <div className="project column3">
                        {
                          console.log(user)
                        }
                        <div className="profile">
                          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                          <p>User ID: {user.id}</p>
                          <h1 className="name">{user.first_name} {user.last_name}</h1>
                          <p className="email">{user.email}</p>
                        </div>
                      </div>
            )
          }
          </div>
        )
}

export default Users;
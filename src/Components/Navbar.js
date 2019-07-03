// import React from 'react'
// import 'reset-css'
// import axios from 'axios'
// import {Link} from 'react-router-dom'
// import {connect} from 'react-redux'

// import {
//     nav,
//     AppContainer,
//     FormContainer,
//     Span
//   } from './AppStylesNav';

// const Navbar = ({ username }) => {
//     return (
//         <AppContainer>

//             <Span><Link to='/eventdisplay' style={{ textDecoration: 'none', color: '#5e0a0a' }}>events</Link></Span>
//             <Span><Link to='/messages' style={{ textDecoration: 'none', color: '#5e0a0a'  }}>messages</Link></Span>
//             <Span><Link to='/userprofile' style={{ textDecoration: 'none', color: '#5e0a0a'  }}>my profile</Link></Span>
//             <Span><Link to='/tipstricks' style={{ textDecoration: 'none', color: '#5e0a0a'  }}>tips&tricks</Link></Span>
                      
//             <span>{username && username}</span>
//         </AppContainer>
//     )
// }

// const mapStateToProps = (reduxState) => {
//     return {
//         username: reduxState.username
//     }
// }

// export default connect(mapStateToProps)(Navbar)
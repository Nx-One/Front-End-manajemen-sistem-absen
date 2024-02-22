// ProtectedRoutes.js
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from '../landingPages/pages/homeBoard';
import Presence from '../landingPages/pages/presencesCadet';
import ExternalApplication from '../landingPages/pages/ExternalApplications';
import AttendanceforExternal from '../landingPages/pages/AttendanceforExternals';
import LeaveApplication from '../landingPages/pages/LeaveApplications';
import SicknessPermit from '../landingPages/pages/SicknessPermits';
import Help from '../landingPages/pages/Helps';
import Listusers from '../landingPages/pages/listUsers';
import CreateProfile from '../landingPages/pages/createProfile';

export const getRoleFromIdLevel = (id_level) => {
    // Misalkan peran admin memiliki id_level 1,
    // peran user memiliki id_level 2, dan peran external memiliki id_level 3
    if (id_level === 1) {
        return 'admin';
    } else if (id_level === 2) {
        return 'Karo AK';
    } else if (id_level === 3) {
        return 'Dekan';
    } else if (id_level === 4) {
        return 'Kaprodi';
    } else if (id_level === 5) {
        return 'Dosen';
    } else if (id_level === 6) {
        return 'Kadet Mahasiswa';
    } else {
        return 'Unknown Role'; // Default role jika id_level tidak sesuai
    }
};


const ProtectedRoutes = ({ id_level}) => {



    const role = getRoleFromIdLevel(id_level);
    // console.log(role);


    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {role === 'admin' && (
                <>
                    <Route path='/presenceCadet' element={<Presence/>} />
                    <Route path='/externalApplication' element={<ExternalApplication />} />
                    <Route path='/attendanceforExternal' element={<AttendanceforExternal />} />
                    <Route path='/leaveApplication' element={<LeaveApplication />} />
                    <Route path='/sicknessPermit' element={<SicknessPermit />} />
                    <Route path='/listUsers' element={<Listusers />} />
                    <Route path='/createProfile' element={<CreateProfile />} />
                    <Route path='/help' element={<Help />} />
                </>

            )}
            {role === 'Karo AK' && (
                <>
                    <Route path='/externalApplication' element={<ExternalApplication />} />
                    <Route path='/leaveApplication' element={<LeaveApplication />} />
                    <Route path='/help' element={<Help />} />
                </>
            )}
            {role === 'Dekan' && (
                <>
                    <Route path='/externalApplication' element={<ExternalApplication />} />
                    <Route path='/leaveApplication' element={<LeaveApplication />} />
                    <Route path='/help' element={<Help />} />
                </>
            )}
            {role === 'Kaprodi' && (
                <>
                    <Route path='/externalApplication' element={<ExternalApplication />} />
                    <Route path='/leaveApplication' element={<LeaveApplication />} />
                    <Route path='/help' element={<Help />} />
                </>
            )}
            {role === 'Dosen' && (
                <>
                    <Route path='/presence' element={<Presence />} />
                    <Route path='/help' element={<Help />} />
                </>
            )}
            {role === 'Kadet Mahasiswa' && (
                <>
                    <Route path='/externalApplication' element={<ExternalApplication />} />
                    <Route path='/attendanceforExternal' element={<AttendanceforExternal />} />
                    <Route path='/leaveApplication' element={<LeaveApplication />} />
                    <Route path='/sicknessPermit' element={<SicknessPermit />} />
                    <Route path='/help' element={<Help />} />
                </>
            )}
        </Routes>
    );
}

export default ProtectedRoutes;
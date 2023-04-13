import React, { Fragment } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { getLocalStorageItem } from '@sekeron/domain'
import Registration from "../pages/user-management/registration/Registration";
import CreateUser from "../pages/user-management/create-user/CreateUser";
import routesNames from "./RouteNames";
import ProtectedRoute from "./ProtectedRoutes";
import PersonalisationPage from "../pages/personalisation/PersonalisationPage";
import Login from "../pages/user-management/login/Login";
import CreatePost from "../pages/create-post/CreatePost";
import PreviewPost from "../pages/create-post/preview-post/PreviewPost";
import AddPostDetails from "src/pages/create-post/addPostDescription/AddPostDetails";
import Home from "src/pages/home/Home";
import ViewPost from "src/pages/home/view-post/ViewPost";
import Profile from "../pages/profiles/Profile";
import PostReorder from "src/pages/create-post/post-reorder/PostReorder";
import CreateProject from "src/pages/create-project/CreateProject";
import ArtistDetails from "src/pages/create-project/collaborators/artist-details/ArtistDetails";
import TermsAndConditions from "src/pages/create-project/terms-and-conditions/TermsAndConditions";
import PreviewProject from "src/pages/create-project/preview-project/PreviewProject";
import Dashboard from "src/pages/dashboard/Dashboard";
import MyProjects from "src/pages/dashboard/my-projects/MyProjects";
import MyCollaborators from "src/pages/dashboard/my-collabrorators/MyCollaborators";
import MyEvents from "src/pages/dashboard/my-events/MyEvents";
import MyCalender from "src/pages/dashboard/my-calender/MyCalender";
import Blogs from "src/pages/blogs/Blogs";
import BlogCompleteView from "src/pages/blogs/view-blog/ViewBlog";
import Events from "src/pages/events/Events";
import ViewEvent from "src/pages/events/view-event/ViewEvent";
import Chats from "src/pages/chats/Chats";
import Notifications from "src/pages/notifications/Notifications";
import Upload from "src/pages/upload/Upload";
import HomeContainer from "src/pages/home/HomeContainer";
import Explore from "src/pages/explore/Explore";
import { MediaGallery } from "src/pages/dashboard/project-details/media-gallery/MediaGallery";
import SketchBoard from "src/pages/dashboard/project-details/sketch-board/SketchBoard";
import Search from "src/pages/search/Search";
import MyProfile from "src/pages/profile/Profile";

const AppRoutes = () => {

    let routes = (
        <Fragment>
            <Route path="/" element={<Navigate to={routesNames.login} />} />
            <Route path={routesNames.login} element={<Login />} />
            <Route path={routesNames.registration} element={<Registration />} />
            <Route path={routesNames.createProfile} element={<CreateUser />} />
            <Route path={routesNames.homePersonification} element={<PersonalisationPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Fragment>
    );

    const loggedInUser = getLocalStorageItem('token');

    if (loggedInUser) {
        routes = (
            <Route element={<ProtectedRoute />}>

                {/* create post and project */}
                <Route path={routesNames.upload} element={<Upload > <Outlet /> </Upload>} >
                    <Route path={routesNames.termsAndConditions} element={<TermsAndConditions />} />
                    <Route path={routesNames.createProject} element={<CreateProject />} />
                    <Route path={routesNames.upload} element={<Home isAppliedOpacity={true} />} />
                    <Route path={routesNames.createPost} element={<CreatePost />} />
                    <Route path={routesNames.artistDetails} element={<ArtistDetails />} />
                    <Route path={routesNames.previewPost} element={<PreviewPost />} />
                    <Route path={routesNames.addPostDetails} element={<AddPostDetails />} />
                    <Route path={routesNames.postReorder} element={<PostReorder />} />
                    <Route path={routesNames.artistDetails} element={<ArtistDetails />} />
                    <Route path={routesNames.previewProject} element={<PreviewProject />} />
                </Route>

                <Route path={routesNames.profile} element={<MyProfile />} />

                {/* dashboard */}
                <Route path={routesNames.dashboard} element={<Dashboard />} />
                <Route path={routesNames.myProjects} element={<MyProjects />} />
                <Route path={routesNames.myCollaborations} element={<MyCollaborators />} />
                <Route path={routesNames.myEvents} element={<MyEvents />} />
                <Route path={routesNames.myCalender} element={<MyCalender />} />
                <Route path={routesNames.mediaGallery} element={<MediaGallery />} />
                <Route path={routesNames.sketchBoard} element={<SketchBoard />} />

                <Route path={routesNames.chat} element={<Profile />} />

                <Route path={routesNames.notifications} element={<Notifications> <Outlet /> </Notifications>} >
                    <Route path={routesNames.notifications} element={<Home isAppliedOpacity={true} />} />
                </Route>

                <Route path={routesNames.home} element={<HomeContainer> <Outlet /> </HomeContainer>} >
                    <Route path={routesNames.home} element={<Home />} />
                    <Route path={routesNames.viewpost} element={<ViewPost />} />
                    <Route path={routesNames.events} element={<Events />} />
                    <Route path={routesNames.viewEvent} element={<ViewEvent />} />
                </Route>

                <Route path={routesNames.viewBlogs} element={<BlogCompleteView />} />

                <Route path={routesNames.explore} element={<Explore />} />
                <Route path={routesNames.blogs} element={<Blogs />} />

                <Route path="*" element={<Navigate to={routesNames.home} />} />
                <Route path={routesNames.search} element={<Search />} />
            </ Route >
        )
    }
    return (
        <Routes>
            {routes}
        </Routes>
    );
};

export default AppRoutes;
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import UserContextProvider from './contexts/UserContext';
import Title from "./components/Title";
import Header from "./components/Header";
import UnderConstruction from "./screens/UnderConstruction";
import HomeScreen from "./screens/HomeScreen";

import PostDetail from "./components/PostDetail";
import CreatePost from "./components/Summernote";

import ProgramScreen from "./screens/ProgramScreen";
import MentoScreen from "./screens/MentoScreen";
import StoryScreen from "./screens/StoryScreen";
import PastScreen from "./screens/PastScreen";
import pMentoScreen from "./screens/pMentoScreen";
import pStoryScreen from "./screens/pStoryScreen";

import StudyScreen from "./screens/StudyScreen";
import PlanScreen from "./screens/PlanScreen";
import AboutScreen from "./screens/AboutScreen";

import ArchiveScreen from "./screens/ArchiveScreen";

import CommunityScreen from "./screens/CommunityScreen";
import EventsScreen from "./screens/EventsScreen";
import NewsScreen from "./screens/NewsScreen";

import GreetingScreen from "./screens/GreetingScreen";
import HistoryScreen from "./screens/HistoryScreen";
import FundingScreen from "./screens/FundingScreen";
import FoundationScreen from "./screens/FoundationScreen";
import AssociationScreen from "./screens/AssociationScreen";
import GroupScreen from "./screens/GroupScreen";
import BusinessScreen from "./screens/BusinessScreen";
import MapScreen from "./components/MapView";

import Login from "./screens/LoginScreen";
import Footer from "./components/Footer";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Header />
        <Title />
        <main>
          <Route path="/map" component={MapScreen} />
          <Route path="/business" component={BusinessScreen} />
          <Route path="/group" component={GroupScreen} />
          <Route path="/funding" component={FundingScreen} />
          <Route path="/association" component={AssociationScreen} />
          <Route path="/history" component={HistoryScreen} />
          <Route path="/foundation" component={FoundationScreen} />
          <Route path="/greeting" component={GreetingScreen} />

          <Route path="/create/:id" component={CreatePost} />
          <Route path="/login" component={Login} />

          <Route path="/news" component={NewsScreen} />
          <Route path="/events" component={EventsScreen} />
          <Route path="/postdetail/:id/:board" exact={true} component={PostDetail} />
          <Route path="/community" exact={true} component={CommunityScreen} />
          
          <Route path="/archive" exact={true} component={ArchiveScreen} />

          <Route path="/about" component={AboutScreen} />
          <Route path="/plan" component={PlanScreen} />
          <Route path="/studies" exact={true} component={StudyScreen} />

          <Route path="/pastmento" component={pMentoScreen} />
          <Route path="/paststory" component={pStoryScreen} />
          <Route path="/past" component={PastScreen} />
          <Route path="/story" component={StoryScreen} />
          <Route path="/mento" component={MentoScreen} />
          <Route path="/programs" component={ProgramScreen} />

          <Route path="/under" exact={true} component={UnderConstruction} />
          <Route path="/" exact={true} component={HomeScreen} />
        </main>
        <Footer />
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;

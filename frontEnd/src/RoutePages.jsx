import React, { useEffect, useState } from "react";
import axios from "axios";

import RequireAuth from "./components/pages/login/RequireAuth";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./styles/app.css";
import Home from "./components/pages/Home/Home";

import AddEntity from "./manage/AddEntity";
import EntityList from "./manage/EntityList";
import EntityDetail from "./manage/EntityDetail";
import EditEntity from "./manage/EditEntity";
import { EntitiesCrudeContextProvider } from "./context/EntitiesCrudContext";
import { TransformsCrudeContextProvider } from "./context/TransformsCrudContext";
import { UsersCrudeContextProvider } from "./context/UsersCrudContext";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Networkrel from "./components/pages/èntities/Networkrel";
import Personal from "./components/pages/èntities/personal";
import Locational from "./components/pages/èntities/Location Based";
import Devices from "./components/pages/èntities/Devices";
import Grouped from "./components/pages/èntities/Grouped";
import KalTools from "./components/pages/tools/KaliTools";
import Tools from "./components/pages/tools/Tools";
import Api from "./components/pages/tools/Api";
import OpenSource from "./components/pages/tools/OpenSource";
import Transform from "./components/pages/transform/Transform";
import Faq from "./components/pages/faq/Faq";
import PostArticles from "./components/pages/postArticles/PostArticles";
import BasicEntities from "./components/pages/èntities/BasicEntities";
import PageNotFound from "./components/pages/PageNotFound";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/login/Register";
//import Layout from "./components/pages/login/Layout";
import Unauthorized from "./components/pages/login/Unauthorized";
import ContributeWhatYouHave from "./manage/ContributeWhatYouHave";
import TemporaryData from "./manage/TemporaryData";
import TransformList from "./manage/TransformList";
import AddTransform from "./manage/AddTransform";
import EditTransform from "./manage/EditTransform";
import UserList from "./manage/UserList";

const Roles = {
  User: 3333,
  Editor: 2222,
  Admin: 1111,
};
function RoutePages() {
  const [entities, setEntities] = useState([
    {
      titie: "",
      sentense: "",
      Id: "",
      name: "",
      description: "",
      category: "",
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/entities")
      .then((res) => {
        setEntities(res.data);
      })

      .catch((error) => console.log(error));
  }, []);

  const [transforms, setTransforms] = useState([
    {
      titie: "",
      sentense: "",
      Id: "",
      name: "",
      inputEntity: "",
      outputEntity: "",
      reverseFlag: "",
      usedTool: "",
      description: "",
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/transforms")
      .then((res) => {
        setTransforms(res.data);
      })

      .catch((error) => console.log(error));
  }, []);
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />

        <EntitiesCrudeContextProvider>
          <TransformsCrudeContextProvider>
            <UsersCrudeContextProvider>
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route element={<RequireAuth allowedRoles={[Roles.Admin]} />}>
                  <Route path="/users" exact element={<UserList />} />
                </Route>

                <Route element={<RequireAuth allowedRoles={[Roles.User]} />}>
                  <Route
                    path="/contribute"
                    exact
                    element={<ContributeWhatYouHave />}
                  />
                </Route>
                <Route element={<RequireAuth allowedRoles={[Roles.Editor]} />}>
                  <Route path="/manage" exact element={<EntityList />} />
                  <Route
                    path="/manage/transformList"
                    exact
                    element={<TransformList />}
                  />
                  <Route
                    path="/manage/transform/edit"
                    exact
                    element={<EditTransform />}
                  />

                  <Route
                    path="/temporayData"
                    exact
                    element={<TemporaryData />}
                  />
                  <Route path="/manage/edit" exact element={<EditEntity />} />

                  <Route path="/manage/add" exact element={<AddEntity />} />
                  <Route
                    path="/manage/addTransform"
                    exact
                    element={<AddTransform />}
                  />
                </Route>
                <Route path="/" exact element={<Home />} />
                <Route path="/entity/:id" element={<EntityDetail />} />
                <Route path="/unauthorized" exact element={<Unauthorized />} />
                <Route
                  path="/BasicEntities"
                  exact
                  element={<BasicEntities />}
                ></Route>

                <Route
                  path="/PostArticles"
                  exact
                  element={<PostArticles />}
                ></Route>
                <Route path="/Login" exact element={<Login />}></Route>
                <Route path="/register" exact element={<Register />}></Route>
                <Route
                  path="/frequentlyAskedQuestion"
                  exact
                  element={<Faq />}
                ></Route>

                <Route
                  path="/Tools/OpenSource"
                  exact
                  element={<OpenSource />}
                ></Route>
                <Route path="/Tools/Api" exact element={<Api />}></Route>
                <Route path="/Tools" exact element={<Tools />}></Route>
                <Route
                  path="/Tolls/toolUsage"
                  exact
                  element={<KalTools />}
                ></Route>
                <Route
                  path="/BasicEntities/GroupBased"
                  exact
                  element={<Grouped />}
                ></Route>
                <Route
                  path="/BasicEntities/DeviceBased"
                  exact
                  element={<Devices />}
                ></Route>
                <Route
                  path="/BasicEntities/NetworkBased"
                  exact
                  element={<Networkrel entities={entities} />}
                ></Route>
                <Route
                  path="/BasicEntities/PersonBased"
                  exact
                  element={<Personal entities={entities} />}
                ></Route>
                <Route
                  path="/BasicEntities/LocationBased"
                  exact
                  element={<Locational />}
                ></Route>
                <Route
                  path="/transform"
                  exact
                  element={<Transform transforms={transforms} />}
                ></Route>

                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </UsersCrudeContextProvider>
          </TransformsCrudeContextProvider>
        </EntitiesCrudeContextProvider>
      </div>
    </Router>
  );
}

export default RoutePages;

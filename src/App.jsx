import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Onboarding from "./pages/Onboarding";
import Test from "./pages/Test";
import ExtendedTest from "./pages/ExtendedTest";
import Results from "./pages/Results";
import Report from "./pages/Report";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import ProfessionPage from "./pages/ProfessionPage";
import Plan from "./pages/Plan";

export default function App(){
  return <div className="min-h-screen"><Header /><Routes><Route path="/" element={<Onboarding/>}/><Route path="/test" element={<Test/>}/><Route path="/extended-test" element={<ExtendedTest/>}/><Route path="/results" element={<Results/>}/><Route path="/report" element={<Report/>}/><Route path="/articles" element={<Articles/>}/><Route path="/articles/:id" element={<ArticleDetail/>}/><Route path="/profession/:id" element={<ProfessionPage/>}/><Route path="/plan" element={<Plan/>}/><Route path="*" element={<Navigate to='/' replace/>}/></Routes></div>
}

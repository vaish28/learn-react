import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './qcomps/profile_mistake.js'
import FirstComponent from './qcomps/firstComp.js'
import Bio from './qcomps/bios.js'
import TodoList from './qcomps/todos.js'
import Gallery from './components/gallery.js'
import Holder from './components/square.js'
import PackingList from './components/props_item.js'
import List from './components/list_keys.js'
import RecipeList from './qcomps/recipes.js'
import MenuBar from './qcomps/menuBar.js'
import Form from './qcomps/stuckForm.js'
import FeedbackForm from './qcomps/thankYouCrash.js'
import RequestTracker from './qcomps/shoppingCart.js'
import Scoreboard from './qcomps/updObjectsForm.js'
import List1 from './qcomps/artistsArr.js'
import List2 from './qcomps/artistsRemoveArr.js'


export default function Home() {
  return (
    <div className={styles.main}>
        <Profile />
        <FirstComponent />
        <TodoList/>
        <Bio/>
        <Gallery/>
        <Holder/>
        <PackingList/>
        <List/>
        <RecipeList/>
        <MenuBar/>
        <Gallery/>
        <Form/>
        <FeedbackForm/>
        <RequestTracker/>
        <Scoreboard/>
        <List1/>
        <List2/>
    </div>
  )
}

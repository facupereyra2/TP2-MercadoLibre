import React, {useState} from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer'

const Home = () => {

  const [search, setSearch] = useState('');

  return (
    <>
      <Header setSearch={setSearch}/>
      <Card search={search}/>
      <Footer/>
    </> 
  );
}
 
export default Home;
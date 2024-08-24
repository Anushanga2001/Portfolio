import React from 'react';
import Foot from '../components/Foot';

function Home() {
  return (
    <div>
    <div style={{ display: 'flex', padding: '20px', paddingRight: '30px', fontFamily: 'serif' }}>
      <div style={{ position: 'left', flex: 1 }}>
        <div>
        </div>
        <div>
        </div>
      </div>
      <div style={{ position: 'right', flex: 1 }}>
        <div style={{ padding: '15px', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.8)', border: '2px solid yellow'}}>
          <center><h1 style={{ color: 'rgba(255, 255, 0, 0.8)' }}>Anushanga Kaluarachchi</h1>
            <br />
            <p>I'm a student at University of Kelaniya department of Industrial Management.<br /> My specialisation I'm doing in <b>Data Science field.</b> I'm from
              Ganemulla. And my schoool was Ruwanwella Central college. I completed my AL's in <b>Physical science</b> stream with 2 B's and 1 C grade.
              Currently I'm 24 years old.<br /></p>
          </center>
        </div>
        <br />
        <center>
          <div style={{ padding: '15px', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.8)', border: '2px solid yellow'}}>
            <h3 style={{ color: 'rgba(255, 255, 0, 0.8)' }}>When I'm in the university</h3>
            <br />
            <p>
              As my hobby I played batminton in the university. I participlated for the university slug in 2023.
              More than 2 years I played batminton in the university.
            </p>
            <br />
            <p>When I'm in the <b>Gavels club</b> I'm working as a member.
              I joined for the sessions and improved my English speaking skill by participating for the session most of the time.</p>
            <br />
            <p>When I'm in the <b>Leo club</b> of University of Kelaniya. I worked as a graphic designer in Kelibimata arunella CSR project. In that project
              we helped for a poor school in Bulathkohupitiya area. That school name was Bulathkohupitiya primary collage. For that school we doneted
              some sport equipments.
            </p>
          </div>
          <br/>

          <div style={{ padding: '15px',  color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.8)', border: '2px solid yellow'}}>
            <h3 style={{ color: 'rgba(255, 255, 0, 0.8)' }}>When I was in school</h3>
            <p style={{ marginTop: '10px' }}>
              My school days were filled with excitement and responsibility. As the vice-captain of the cricket team, I had the honor of leading my team on the field, where I learned the true essence of teamwork and leadership.
              <br/><br/>Beyond the cricket pitch, I was also an active member of the <b>Parisara Niyamu Society</b>, where I dedicated myself to environmental initiatives, helping to promote sustainability and awareness among my peers.
            </p>
          </div>
        </center>
      </div>
    </div>
    <div>
      <Foot />
    </div>
    </div>
  );
}

export default Home;
import { initializeApp } from "firebase/app";
import { getFirestore , collection, addDoc, getDocs, limit, orderBy, query} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUn094jTiIl3YdMrcfDuw8oYgASssj-DE",
  authDomain: "notesapi-a309c.firebaseapp.com",
  projectId: "notesapi-a309c",
  storageBucket: "notesapi-a309c.firebasestorage.app",
  messagingSenderId: "821139254714",
  appId: "1:821139254714:web:5f43f2a75b2103e2940183",
  measurementId: "G-KP1Z7B1NT0"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let notes: any[] = []

async function queryForDocuments() {
  const results: any[] = []
  const notesQuery = query(
    collection(db, "notes"),
    orderBy("Created", "desc"),
    limit(3)
  )


const querySnapshot = await getDocs(notesQuery);

const allDocs = querySnapshot.forEach((snap) => {
  results.push(snap.data());
})
console.log(results)
return results
}


export async function Notes() {
  return (
    <div className="jumbotron jumbotron-fluid text-light mb-5" id="notes">
      <div className="container">
        <h1>notes</h1>
        <hr />
        <div id="notescontainer" className="d-flex flex-wrap justify-content-around">
          {/*<!-- Notes -->*/
            await queryForDocuments().then((notes) => (
              notes.map((note, index) => (
                <div key={index} className="card text-light notebox col-12 col-md-3 mb-3 dark-border-subtle">
                  <div className="card-body">
                    <h5 className="card-title">{note.Title}</h5>
                    <hr/>
                    <p className="card-text">{note.Content}</p>
                    <h6 className="card-subtitle mb-2">{`${note.Created.toDate().toLocaleDateString()} - ${note.Created.toDate().toLocaleTimeString()}`}</h6>
                  </div>
                </div>
            )))).catch((err) => (
              <p>Normally, you'd have a nice little section here with nice little post it notes. someone hates fun so this isn't a thing anymore. i'm working on it!</p>
            ))
            

             
            
          
          }
          
          
        </div>
      </div>

    </div>
  );
}

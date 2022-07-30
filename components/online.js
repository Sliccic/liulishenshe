import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ server = "sg" }) {

  var host;
  if(server == "3.0前瞻"){
    host = "285.ysycf.ml"
  } else if(server == "2.8指令"){
    host = "www.ysycf.ml"
  } else if(server == "2.8养成"){
    host = "www.yuanshen.ml:4434"
  }
  
  const { data, error } = useSWR(
    `https://${host}/status/server`,
    fetcher
  );

  console.log("tes", data);

  var online = "?";
  if(data){
    if(data.status){
      if(typeof data.status.playerCount !== "undefined"){
        online = data.status.playerCount;
      }
    }
  }
  
  return (

      <div class="stat">
        <div class="stat-title">{server}</div>
        <div class="stat-value">{online}</div>
        <div class="stat-desc">在线人数</div>
      </div>

  );
}

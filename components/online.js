import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ server = "sg" }) {

  var host;
  var seraddress;
  var serName;
  if(server == "s1"){
    serName = "3.0前瞻:"
    host = "285.ysycf.ml"
    seraddress = "3.0前瞻 电脑：https://www.123pan.com/s/PFbrVv-2PXzv提取码:llss 手机：暂不可用"
  } else if(server == "s2"){
    serName = "2.8指令:"
    host = "www.ysycf.ml"
    seraddress = "2.8指令 电脑：106.13.5.214:4433 手机：暂不可用"
  } else if(server == "s3"){
    serName = "2.8养成:"
    host = "www.yuanshen.ml:4434"
    seraddress = "2.8养成 电脑：www.yuanshen.ml:4434 手机：https://www.123pan.com/s/PFbrVv-hPXzv提取码:llss"
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

      if(typeof data.status.mem !== "undefined"){
            mem = "内存占用：" + data.status.mem;
          }
        }
      }
      document.getElementById(server + "_online").innerText = online;
      document.getElementById(server + "_mem").innerText = mem;
    })
    .catch(error => {
      console.error('Error:', error);
      online = "服务器因该正常";

      document.getElementById(server + "_online").innerText = online;
      document.getElementById(server + "_mem").innerText = mem;
    });
  }

  setStatus();
  setInterval(setStatus, 3000);
  
  return (

      <div class="stat">
        <div class="stat-title">{server}</div>
        <div class="stat-value">{online}</div>
        <div class="stat-title" id={server + "_mem"}></div>
        <div class="stat-desc">在线人数</div>
      </div>

  );
}

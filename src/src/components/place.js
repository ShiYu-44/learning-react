
const PLACE_LIST = [
    "キッチン",
    "キッチン収納",
    "玄関",
    "玄関収納",
    "お手洗い",
    "洗面台",
    "洗面台の収納",
    "バスルーム",
    "リビング",
    "自室",
    "子供部屋",
    "PC周辺",
    "収納",
    "洋服ダンスの中身",
    "テーブルの上",
    ]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function selectPlace(placeList) {
    return placeList[getRandomInt(placeList.length)]
  }

const Place = () =>{
    return (
        <div className="place contents">
            <p>
                {selectPlace(PLACE_LIST)}
            </p>
        </div>
    )
}
  
  export default Place;
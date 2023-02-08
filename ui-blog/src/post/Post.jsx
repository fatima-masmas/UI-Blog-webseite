import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img classNmae="postImg"src="https://picsum.photos/170" alt=""/>
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Munsic</span>
            <span className="postCat">Life</span>
            <span className="postCat">style</span>
        </div>
        <span className="postTitle">In React applications, 
        </span>
        <hr/>
        <span className="postDate"></span>
      </div>
    </div>
  )
}

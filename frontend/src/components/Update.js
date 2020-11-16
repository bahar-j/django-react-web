import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "../css/summernote.css";

// imports for summernote
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css";
import "react-summernote/lang/summernote-ko-KR";
import "bootstrap/js/modal";
import "bootstrap/js/dropdown";
import "bootstrap/js/tooltip";
import "bootstrap/dist/css/bootstrap.css";

function Summernote(props) {
  const boardId = parseInt(props.match.params.board);
  const postId = props.match.params.id;
  let boardName = '';
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState([]);
  const base = 'http://3.35.88.14/api/';
  const imageBase = 'http://127.0.0.1:8000/photo/';
  var path = window.location.href;
  // const [files, setFile] = useState(null);
  if (boardId === 2) {
    boardName = "community";
  } else if (boardId === 3) {
    boardName = "events";
  } else if (boardId === 4) {
    boardName = "business";
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(base + postId);
      // 현재 게시판의 게시물만 가져오기 (자료실, "공지사항", 행사안내, 멘토링 회보, 경영공시)
      setPosts(data);
      setContent(data['content']);
      document.querySelector("#post-title").value = data['title'];
      document.querySelector("#cbox").checked = data['isNotice'];
    };
    fetchPosts();
  }, []);

  const onChange = (content) => {
    setContent(content);
    console.log(content);
  };

  // const fileChangedHandler = (e) => {
  //   const files = e.target.files;
  //     setFile(files);
  // };

  const onImageUpload = (images, insertImage) => {
    // const IMAGE_PATH = 'http://www.hufsmentoring.or.kr/media/summernote/';
    for (let i = 0; i < images.length; i++) {
      let data = new FormData();
      data.append("image", images[i]);

      console.log(data);
      axios.post(imageBase, data)
      .then( function(response){
        console.log(response.data['filename'])
        insertImage("/static/" + response.data['filename']);
        // insertImage("../../media/" + response.data['filename']);
      }).catch( e => {
        console.log(e)
      })

    }
  };

  const createPost = () => {
    // const editorToHtml = draftToHtml(
    //   convertToRaw(editorState.getCurrentContent())
    // );
    // const formData = new FormData();
    // for(let i = 0; i< files.length; i++) {
    //     formData.append('file', files[i])
    // }
    // const config = {
    //   headers: {
    //     "content-type": "multipart/form-data"
    //   }
    // };
    // console.log(files[0]);
    // axios.post(`uploadAPI`, formData, config);
    const title = document.querySelector("#post-title").value;
    const checked = document.querySelector("#cbox").checked;
    const createData = async () => {
      await axios.put(base + postId, {
        title: title,
        content: content.toString(),
        board: parseInt(boardId),
        status: "published",
        published: moment().format(),
        isNotice: Boolean(checked),
        author: 1,
        // document: files[0],
      });
    };
    try {
      createData();
    } catch (error) {
      console.log(error);
    }

    // return (window.location.href = "/" + boardName);
  };

  return (
    <div className="post-container">
      <input type="text" id="post-title" placeholder=" 제목" />
      <ReactSummernote
        value={content}
        options={{
          lang: "ko-KR",
          height: 500,
          dialogsInBody: true,
          toolbar: [
            ["style", ["style"]],
            ["font", ["bold", "underline", "clear"]],
            ["fontname", ["fontname"]],
            ["para", ["ul", "ol", "paragraph"]],
            ["table", ["table"]],
            ["insert", ["link", "picture", "video"]],
            ["view", ["fullscreen", "codeview"]],
          ],
        }}
        onChange={onChange}
        onImageUpload={onImageUpload}
      />
      <span className="is-notice">
        공지글 여부: <input type="checkbox" id="cbox" />
      </span>
      <br />
      <br />
      {/* 파일 첨부: <input type="file" multiple onChange={fileChangedHandler} /><br /> */}
      <input
        type="button"
        className="notice-btn done"
        value="완료"
        onClick={createPost}
      />
      <input
        type="button"
        className="notice-btn done"
        value="취소"
        onClick={() => (window.location.href = "/" + boardName)}
      />
    </div>
  );
}

export default Summernote;

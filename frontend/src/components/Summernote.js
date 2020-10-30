import React, { useState } from "react";
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
  const boardId = props.match.params.id;
  let boardName = ''
  const [content, setContent] = useState([]);
  // const [files, setFile] = useState(null);
  if (boardId === "2") {
    boardName = "community";
  } else if (boardId === "3") {
    boardName = "events";
  } else if (boardId === "4") {
    boardName = "business";
  }

  const onChange = (content) => {
    setContent(content);
    console.log(content);
  };

  // const fileChangedHandler = (e) => {
  //   const files = e.target.files;
  //     setFile(files);
  // };

  const onImageUpload = (images, insertImage) => {
    for (let i = 0; i < images.length; i++) {
      const reader = new FileReader();

      reader.onloadend = () => {
        insertImage(reader.result);
      };

      reader.readAsDataURL(images[i]);
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
      await axios.post("api url", {
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

    return (window.location.href = "/" + boardName);
  };

  return (
    <div className="post-container">
      <input type="text" id="post-title" placeholder=" 제목" />
      <ReactSummernote
        value="내용을 입력하여주세요"
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
        onClick={() => (window.location.href = "/community")}
      />
    </div>
  );
}

export default Summernote;

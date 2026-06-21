import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddMoviePage.css"; 

function AddMoviePage({ movies, setMovies }) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        subTitle: "",
        description: "",
        genres: "",
        posterImgUrl: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 

        if (!formData.title || !formData.posterImgUrl) {
            alert("영화 제목과 사진 URL은 필수 입력 항목입니다!");
            return;
        }

        const newMovie = {
            id: movies.length + 1, 
            title: formData.title,
            subTitle: formData.subTitle,
            description: formData.description,
            genres: formData.genres ? formData.genres.split(",").map((g) => g.trim()) : ["기타"],
            posterImgUrl: formData.posterImgUrl,
            isLiked: false, 
        };

        setMovies((prevMovies) => [...prevMovies, newMovie]);

        alert("🎬 새로운 영화가 성공적으로 등록되었습니다!");
        navigate("/"); 
    };

    return (
        <div className="add-movie-container">
            <h1>새로운 영화 추가하기</h1>
            <p className="add-movie-subtitle">
                인상 깊게 본 영화나 나만 알고 싶은 숨은 명작을 기록해 보세요.
            </p>

            <form onSubmit={handleSubmit} className="add-movie-form">

                <div className="input-group">
                    <label htmlFor="title">영화 제목<span>*</span></label>
                    <input
                        type="text" id="title" name="title" value={formData.title} onChange={handleChange}
                        placeholder="예: 악마는 프라다를 입는다 2"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="subTitle">서브 타이틀</label>
                    <input
                        type="text" id="subTitle" name="subTitle" value={formData.subTitle} onChange={handleChange}
                        placeholder="예: 영원한 아이콘의 귀환"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="posterImgUrl">사진 (포스터 이미지 URL)<span>*</span></label>
                    <input
                        type="text" id="posterImgUrl" name="posterImgUrl" value={formData.posterImgUrl} onChange={handleChange}
                        placeholder="https://media.themoviedb.org/..."
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="genres">장르 (쉼표로 구분)</label>
                    <input
                        type="text" id="genres" name="genres" value={formData.genres} onChange={handleChange}
                        placeholder="예: 코미디, 드라마, 액션"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="description">줄거리 설명</label>
                    <textarea
                        id="description" name="description" value={formData.description} onChange={handleChange}
                        placeholder="영화에 대한 상세한 설명을 적어주세요." rows="5"
                    />
                </div>

                <button type="submit" className="submit-btn">
                    새로운 영화 등록하기
                </button>
            </form>
        </div>
    );
}

export default AddMoviePage;
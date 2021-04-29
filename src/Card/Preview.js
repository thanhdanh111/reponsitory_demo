import styled from 'styled-components'

export const Layout = styled.div`\
    margin-top: -20px;
    height: 200px;
    width: 381px;
    display: flex;
    place-items: center;
    justify-content:center;
    align-item:center;
    background: red;
`

export const Container = styled.div`
    margin-left: 40%;
    width: 350px;
    display: flex;
    flex-direction: column;
    padding: 36px 48px;
    border-radius: 20px;
    text-align: center;
    place-items: center;
    height: 350px;
    p {
        margin-top: -10px;
        color: #777;
    }
`

export const BoxUpload = styled.div`
    text-align: center;
    display: grid;
    margin-top: 20px;
    place-items: center;
    border: 1px dashed #799CD9;
    height: 180px;
    width: 180px;
    background: #FBFBFF;
    border-radius: 50%;

    .image-upload {
        display: flex;
        flex-wrap:wrap;

        label {
            cursor: pointer;
        
            :hover {
                opacity: .8;
            }
        }

        >input {
            display: none;
        }
    }
`

export const ImagePreview = styled.div`
    text-align: center;
    position: relative;
    /* cursor: pointer; */

    #uploaded-image{
        positon: relative;
        height: 180px;
        width: 180px;
        object-fit: cover;
        border-radius: 50%;
       
    }

    .close-icon{
        background: #000;
        border-radius: 5px;
        opacity: .8;
        position: absolute;
        z-index: 10;
        right: 15px;
        top: 20px;
        cursor: pointer;

        :hover {
            opacity: 1;
        }   
    }
`
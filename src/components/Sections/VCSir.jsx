import React from 'react';
import styled from 'styled-components';
import img1 from '../../assets/img/Team/VCSir.JPG';

export default function VCSir() {
  return (
    <Wrapper>
       <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <div class="card is-horizontal shadow-md is-cursor-pointer transform is-duration-300 hover-shadow-xl hover-translate-y">
                        <div class="card-image">
                            <figure class="image">
                                <img src={img1} alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div class="card-content p-0 is-flex is-flex-direction-column">
                            <div class="content p-5 has-text-grey-light">
                                <h2>Prof. Alok Kumar Chakrawal</h2>
                                <h4>Vice-Chancelor</h4>
                                <h4>Guru Ghasidas Vishwavidyalaya</h4>
                               <p class="is-size-6 has-text-weight-normal">Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non miy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`

padding-top:13vh;
padding-bottom:13vh;

.is-horizontal {
  display: flex;
}

.is-horizontal .card-image {
  flex: 2;
}

.is-horizontal .card-image .image {
  overflow: hidden;
  height: 100%;
  width: 100%;
}

.is-horizontal .card-image .image img {
  height: 100%;
}

img{
    border-radius: 2rem;
}

.is-horizontal .card-content {
text-align: center;
padding-top: 6vh;
}



@media (min-width: 768px) {
  .is-horizontal .card-image .image img {
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
  }
}

@media (max-width: 768px) {
  .is-horizontal {
    flex-direction: column;
  }
}`;
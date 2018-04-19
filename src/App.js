import React, { PureComponent } from 'react';
import styled from 'styled-components';
import HeroImage from './website-hero.jpg';
import measureVh from './vh-helper.js';

const Main = styled.main`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  height: 100vh;
  height: calc(100vh - var(--vh-diff));
  width: 100vw;
  color: #fff;
  background-image: url(${HeroImage});
  background-size: cover;
  background-clip: border-box;
  background-repeat: no-repeat;
  box-sizing: border-box;
  padding: 32px;
  transform: translate3d(0,0,1px);
  backface-visibility: hidden;
  -webkit-overflow-scrolling: touch;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  @media screen and (max-width: 760px) {
    justify-content: flex-start;
    align-items: ;
    padding: 8px;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  font-family: sans-serif;
  border: 6px solid rgba(255, 255 ,255, 0.1);
  border-radius: 4px;
  padding: 40px;
  margin-bottom: 8px;
  transform: translate3d(0,0,0);
  @media screen and (max-width: 760px) {
    justify-content: center;
    align-items: center;
    margin-bottom: auto;
    border: none;
    padding: 8px;
  }
`;

const DateContainer = styled.div`
  font-weight: 400;
  font-size: 4em;
  padding: 0;
  vertical-align: middle;
  text-align: center;
  box-sizing: border-box;
  transform: translate3d(0,0,0);
  @media screen and (max-width: 760px) {
    font-size: 2.5em;
    color: rgba(255, 255 ,255, 0.9);
  }
`;

const Location = styled.div`
  align-self: flex-end;
  transform: translate3d(0,0,0);
  @media screen and (max-width: 760px) {
    color: rgba(255, 255 ,255, 0.8);
  }
`;

const CollapsibleWrap = styled.section`
  width: 305px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 1em;
  font-weight: lighter;
  margin: 0 0 8px 0;
  transform: translate3d(0,0,0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  @media screen and (max-width: 760px) {
    align-self: flex-start;
  }
`;



const CollapsibleToggle = styled.button`
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  opacity: ${ p => p.active ? .8 : .5 };
  padding: 4px 8px 4px 0;
  font-size: 1.1em;
  font-weight: lighter;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translate3d(0,0,0);
  -webkit-perspective: 1000;
  transform-style: preserve-3d;
  transition: opacity 300ms ease-in-out;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  &:hover{
    opacity: .8;
  }
`;

const ToggleIndicator = styled.span`
  font-size: .5em;
  padding-left: 4px;
  transform: translate3d(0,0,0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`;

const CollapsibleBody = styled.div`
  display: ${ p => p.active ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 0 0 0 8px;
  transform: translate3d(0,0,0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  @media screen and (max-width: 760px) {
    justify-content: flex-start;
  }
`;

const CollapsibleLink = styled.a`
  padding: 8px 0;
  text-decoration: none;
  color: #fff;
  opacity: .7;
  transform-style: preserve-3d;
  transition: opacity 300ms ease-in-out;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translate3d(0,0,0);
  -webkit-perspective: 1000;
  transform-style: preserve-3d;
  transition: opacity 300ms ease-in-out;
  &:hover{
    opacity: 1;
  }
`;

const ParkingLink = CollapsibleLink.extend`
  opacity: .5;
  font-size: .75em;
  line-height: 1.5em;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  &:hover{
    opacity: .75;
  }
`;


const CollapsibleLinkInfo = styled.span`
  opacity: .5;
  font-size: .75em;
  margin-top: -4px;
  transform: translate3d(0,0,0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`;

class App extends PureComponent {

  state = {
    eventInfo: false,
    hotels: false,
    registry: false,
  }

  componentDidMount() {
    measureVh();
  }

  handleToggle = (e) => {
    this.setState({
      [e.target.name]: !this.state[e.target.name],
    });
  }

  render() {
    return (
        <Main>
          <Header>
            <DateContainer>6/16/18</DateContainer>
            <Location>Durham, NC</Location>
          </Header>
          <CollapsibleWrap>
            <CollapsibleToggle
              active={this.state.eventInfo}
              onClick={this.handleToggle}
              name='eventInfo'
            >
              Venue and event
              {this.state.eventInfo ?
                <ToggleIndicator>
                  &#9650;
                </ToggleIndicator>
                :
                <ToggleIndicator>
                  &#9660;
                </ToggleIndicator>
              }
            </CollapsibleToggle>
            <CollapsibleBody
              active={this.state.eventInfo}
            >
              <CollapsibleLink
                href='http://www.rickhousedurham.com/'
                target='_blank'
              >
                The Rickhouse
              </CollapsibleLink>
              <CollapsibleLinkInfo>
                Ceremony at 5:30pm - Reception to follow
              </CollapsibleLinkInfo>
              <ParkingLink
                href='https://drive.google.com/open?id=1zv0Fzsp7PAcX4ENmZJJWIBERNhqPbKpy'
                target='_blank'
              >
                Parking Information
              </ParkingLink>
            </CollapsibleBody>
          </CollapsibleWrap>
          <CollapsibleWrap>
            <CollapsibleToggle
              active={this.state.hotels}
              onClick={this.handleToggle}
              name='hotels'
            >
              Hotels and things to do
              {this.state.hotels ?
                <ToggleIndicator>
                  &#9650;
                </ToggleIndicator>
                :
                <ToggleIndicator>
                  &#9660;
                </ToggleIndicator>
              }
            </CollapsibleToggle>
            <CollapsibleBody
              active={this.state.hotels}
            >
              <CollapsibleLink
                href='https://thedurham.com/'
                target='_blank'
              >
                The Durham Hotel
              </CollapsibleLink>
              <CollapsibleLink
                href='https://www.21cmuseumhotels.com/durham/'
                target='_blank'
              >
                21c 'Museum Hotel'
              </CollapsibleLink>
              <CollapsibleLink
                href='http://www.unscriptedhotels.com/'
                target='_blank'
              >
                Unscripted Hotel
              </CollapsibleLink>
              <CollapsibleLink
                href='http://www.marriott.com/hotels/travel/rducv-durham-marriott-city-center/'
                target='_blank'
              >
                Marriott Downtown Durham
              </CollapsibleLink>
              <CollapsibleLink
                href='https://drive.google.com/open?id=1sWT54e1Quy-az5NM5DVJ4S7LNi0Sl0CIlBKmfN75oJI'
                target='_blank'
              >
                Things to do (google doc)
              </CollapsibleLink>
            </CollapsibleBody>
          </CollapsibleWrap>
          <CollapsibleWrap>
            <CollapsibleToggle
              active={this.state.registry}
              onClick={this.handleToggle}
              name='registry'
            >
              See where we're registered
                {this.state.registry ?
                  <ToggleIndicator>
                    &#9650;
                  </ToggleIndicator>
                  :
                  <ToggleIndicator>
                    &#9660;
                  </ToggleIndicator>
                }
            </CollapsibleToggle>
            <CollapsibleBody
              active={this.state.registry}
            >
              <CollapsibleLink
                href='https://www.williams-sonoma.com/registry/nct2vzmc9c/registry-list.html'
                target="_blank"
              >
                Williams Sonoma
              </CollapsibleLink>
              <CollapsibleLink
                href='https://www.crateandbarrel.com/gift-registry/emma-refvem-and-byron-wall/r5761521'
                target="_blank"
              >
                Crate and Barrel
              </CollapsibleLink>
              <CollapsibleLink
                href='https://www.potterybarn.com/registry/7xxqnwqgfn/registry-list.html'
                target="_blank"
              >
                Pottery Barn
              </CollapsibleLink>
            </CollapsibleBody>
          </CollapsibleWrap>
        </Main>
    );
  }
}

export default App;

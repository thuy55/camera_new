import { IonBackButton, IonButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonPage, IonProgressBar, IonRow, IonTitle, IonToast, IonToolbar, useIonViewWillEnter, useIonPopover } from '@ionic/react';
import { colorWandOutline, closeOutline, checkmarkOutline } from 'ionicons/icons';
import { useState } from 'react';
import { useParams } from 'react-router';
import { PollStore } from '../js/PollStore';
import { addVote } from '../js/PollStore';
import { getPoll } from '../js/Selectors';
import styles from "../theme/View.module.scss";
import { getColors } from '../js/utils';
import { SharePopover } from '../components/Share';
import { useRef } from 'react';

const ViewPoll = () => {

	const params = useParams();
	const poll = PollStore.useState(getPoll(params.id));

	const answerRefs = useRef([]);
	const [ colors, setColors ] = useState({});
	const [ showToast, setShowToast ] = useState(false);
	const [ showVotes, setShowVotes ] = useState(false);

	const [ present, dismiss ] = useIonPopover(SharePopover, { onHide: () => dismiss(), poll, setShowToast });

	useIonViewWillEnter(() => {

		const cardStyleColors = getColors(poll.color);
		setColors(cardStyleColors);
	});

	const vote = answerId => {

		if (!poll.voted) {
			
			poll.answers.forEach((answer, index) => {

				const pollAnswer = answerRefs.current[index];
				pollAnswer.classList.add("animate__fadeOut");
			});

			setTimeout(() => addVote(params.id, answerId), 550);
		}
	}

	const getAnswerPercentage = (totalVotes, answerVotes) => {

		const percent = Math.round((answerVotes / totalVotes) * 100);
		return percent;
	}

	return (
    	<IonPage>
      		<IonHeader>
        		<IonToolbar>
          			<IonButtons slot="start">
            			<IonBackButton text="Quay lại" style={{ color: poll.color }} />
          			</IonButtons>
          			<IonTitle>Thông tin khu vực</IonTitle>
				</IonToolbar>
      		</IonHeader>

			  <IonContent className="overflow-hidden">
						<div className="container mb-0 pb-0 overflow-hidden">
							<div className="d-flex justify-content-center pt-2">
								<h2 className="font-weight-bold">Thêm dự án</h2>
							</div>
							<div className="d-flex flex-row justify-content-center">
						
								<form method="POST">
									<div className="input-group">
										{/* <label htmlFor="" className="lb">Tên dự án</label> */}
										<input className="input--style-3" type="text" placeholder="Tên khu vực" name="name" />
									</div>
									<div className="input-group">
										{/* <label htmlFor=""className="lb">Ngày bắt đầu</label> */}
										<input className="input--style-3" type="text" placeholder="Địa chỉ" name="name" />
									</div>
									<div className="input-group">
										{/* <label htmlFor=""className="lb">Ngày kết thúc</label> */}
										<div className="rs-select2 js-select-simple select--no-search" style={{ paddingTop: "20px" }}>
											<select name="gender" tabIndex={-1} className="select2-hidden-accessible" aria-hidden="true">
												<option>ECLO</option>
												<option>ECLO</option>
												<option>ECLO</option>
												<option>ECLO </option>
											</select><span className="select2 select2-container select2-container--default" dir="ltr" style={{ width: "69px" }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-labelledby="select2-gender-aa-container"><span className="select2-selection__rendered" id="select2-gender-aa-container" title="Gender"><b>Dự án</b></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
											<div className="select-dropdown"></div>
										</div>
									</div>
									<div className="input-group">
										<label htmlFor="" className="lb">Trạng thái</label>
										<select name="gender" tabIndex={-1} className="select2-hidden-accessible" aria-hidden="true" >
											<option>Kích hoạt</option>
											<option>Không kích hoạt</option>
										</select>
									</div>
									<div className="button p-t-10">
										<div className="btn-submit">
											<button className="btn btn--pill btn--green" type="submit">Submit</button>
										</div>
										<div className="btn-cancel">
											<button className="btn btn--pill btn--green" type="button" onClick={() => dismiss()}>Cancel</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</IonContent>

			<IonFooter className="ion-padding-bottom">
				<IonRow className="ion-padding-start ion-padding-end ion-padding-bottom ion-padding-top">
					<IonCol size="6">
						<IonButton expand="block" style={ colors.votedButtonStyle }>
							<IonIcon icon={ closeOutline } />
							&nbsp; Hủy
						</IonButton>
					</IonCol>

					<IonCol size="6">
						<IonButton expand="block" fill="outline" style={ colors.notVotedbuttonStyle } onClick={ () => setShowVotes(!showVotes) } disabled={ !poll.voted }>
							<IonIcon icon={ checkmarkOutline } />
							&nbsp; { showVotes  } Cập nhật
						</IonButton>
					</IonCol>
				</IonRow>
			</IonFooter>
    	</IonPage>
	);
};

export default ViewPoll;
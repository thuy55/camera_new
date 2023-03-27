import { createAnimation, IonButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonFooter, IonHeader, IonIcon, IonMenuButton, IonModal, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { arrowForwardOutline } from 'ionicons/icons';
import { getCardStyle } from "../js/utils";
import { getPolls } from "../js/Selectors";
import { PollStore } from '../js/PollStore';
import styles from "../theme/Area.module.scss";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useRef } from 'react';
import {
	add,

} from "ionicons/icons";
const EmpCus = () => {
	const modal = useRef<HTMLIonModalElement>(null);
	const polls = PollStore.useState(getPolls);
	function dismiss() {
		modal.current?.dismiss();
	}
	const enterAnimation = (baseEl: HTMLElement) => {
		const root = baseEl.shadowRoot;

		const backdropAnimation = createAnimation()
			.addElement(root?.querySelector("ion-backdrop")!)
			.fromTo("opacity", "0.01", "var(--backdrop-opacity)");

		const wrapperAnimation = createAnimation()
			.addElement(root?.querySelector(".modal-wrapper")!)
			.keyframes([
				{ offset: 0, opacity: "0", transform: "scale(0)" },
				{ offset: 1, opacity: "0.99", transform: "scale(1)" },
			]);


		return createAnimation()
			.addElement(baseEl)
			.easing("ease-out")
			.duration(500)
			.addAnimation([backdropAnimation, wrapperAnimation]);
	};

	const leaveAnimation = (baseEl: HTMLElement) => {
		return enterAnimation(baseEl).direction("reverse");
	};
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Nhân viên/Khách hàng</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Nhân viên/Khách hàng</IonTitle>
					</IonToolbar>
				</IonHeader>

				{polls.map((poll: { color: any; id: any; question: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; timeLeft: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; totalVotes: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; voted: any; }) => {

					const colors = getCardStyle(poll.color);

					return (

						<IonCard className={`${styles.pollQuestion} animate__animated animate__fadeIn`} style={{ backgroundColor: colors.backgroundColor }} routerLink={`/page/Area/${poll.id}`} routerDirection="forward">

							<IonRow className="ion-align-items-center">
								<IonCol size="9">
									<IonCardHeader>
										<IonCardTitle style={{ color: colors.textColor }}>aaaaaaaaaaa</IonCardTitle>
										<IonCardSubtitle style={{ color: colors.subTextColor }}> eclo</IonCardSubtitle>
										<p style={{ color: colors.textColor }}> lầu 1</p>
										{/* <p style={ colors.statusBadge }>{ poll.voted ? "You have voted on this poll" : "You haven't voted on this poll" }</p> */}
									</IonCardHeader>
								</IonCol>

								<IonCol size="3">
									<IonButton style={colors.buttonStyle}>
										Chi tiết
										<IonIcon icon={arrowForwardOutline} />
									</IonButton>
								</IonCol>
							</IonRow>
						</IonCard>
					);
				})}
			</IonContent>

			{/* <IonFooter className="ion-padding-bottom"> */}

				<IonFab slot="fixed" vertical="bottom" horizontal="end">
					<IonFabButton id="open-modal">
						<IonIcon icon={add}></IonIcon>
					</IonFabButton>
				</IonFab>

				<IonModal
					id="example-modal"
					ref={modal}
					trigger="open-modal"
					enterAnimation={enterAnimation}
					leaveAnimation={leaveAnimation}
					style={{ alignItems: "start" }}
					className="overflow-hidden"
				>
					<IonContent className="overflow-hidden">
						<div className="container mb-0 pb-0 overflow-hidden">
							<div className="d-flex justify-content-center pt-2">
								<h2 className="font-weight-bold">Thêm dự án</h2>
								{/* <IonButtons slot="end">
                     <IonButton onClick={() => dismiss()}>
                      <IonIcon color="dark" slot="end" icon={closeOutline}></IonIcon>
                     </IonButton>
                  </IonButtons> */}
							</div>
							<div className="d-flex flex-row justify-content-center">
								{/* <form className="w-xl-50 w-lg-75">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="">Tên</label>
                        <input type="text" className="input-name"/>
                      </div>
                      <div className="form-group">
                          {" "}
                          <label>Ngày kết thúc:</label>
                          <div className="input-field">
                            {" "}
                            <span className="fa fa-envelope-o p-2"></span>{" "}
                            <input type="date" required />{" "}
                          </div>
                        </div>
                      <div className="form-group">
                          {" "}
                          <label>Ngày kết thúc:</label>
                          <div className="input-field">
                            {" "}
                            <span className="fa fa-envelope-o p-2"></span>{" "}
                            <input type="date" required />{" "}
                          </div>
                        </div>
                      <div className="d-flex flex-row justify-content-center w-100">
                        {" "}
                        <button type="button" className="btn btn-info">Hoàn tất</button>
                      </div>
                    </div>
                  </div>
                </form> */}
								<form method="POST">
									<div className="input-group">
										{/* <label htmlFor="" className="lb">Tên dự án</label> */}
										<input className="input--style-3" type="text" placeholder="Name" name="name" />
									</div>
									<div className="input-group">
										{/* <label htmlFor=""className="lb">Ngày bắt đầu</label> */}
										<input type="date" />
									</div>
									<div className="input-group">
										{/* <label htmlFor=""className="lb">Ngày kết thúc</label> */}
										<input type="date" />
									</div>
									<div className="input-group">
										<div className="rs-select2 js-select-simple select--no-search" style={{ paddingTop: "20px" }}>
											<select name="gender" tabIndex={-1} className="select2-hidden-accessible" aria-hidden="true">
												<option>Gender</option>
												<option>Male</option>
												<option>Female</option>
												<option>Other</option>
											</select><span className="select2 select2-container select2-container--default" dir="ltr" style={{ width: "69px" }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-labelledby="select2-gender-aa-container"><span className="select2-selection__rendered" id="select2-gender-aa-container" title="Gender"><b>Tên công ty</b></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
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
				</IonModal>
			{/* </IonFooter> */}
		</IonPage>
	);
};

export default EmpCus;
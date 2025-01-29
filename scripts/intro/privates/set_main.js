function set_main() {
	function Div_main() {
		let class_div_ol = "text-md text-gray-500 space-y-4"
		let class_ol = "space-y-2 text-gray-500 list-decimal list-inside"
		let class_ul = "pl-5 space-y-1 list-disc list-inside"
		

		function Div_title(props) {
			return (
				<h3 class="text-lg font-medium text-gray-900">
					{props.title}
				</h3>                    
			)
		}

		return (
			<section class="bg-white">
				<div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
					<div class="mx-auto max-w-screen-lg text-center">
						<h2 class="mb-2 text-4xl tracking-tight font-extrabold text-gray-900">개인정보 보호 방침</h2>
					</div>
					
					<div class="flex flex-col pt-8 text-left border-t border-gray-200 space-y-8">
						<div class="px-4">
							<p class={class_ol}>
								주식회사 통계마당은 「개인정보 보호법」 제 30조에 따라 정보 주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리 방침을 수립·공개합니다.<br/>
								이 개인정보처리방침은 2021년 12월 9부터 적용됩니다.
							</p>
						</div>

						<div class="px-4">
							<Div_title title={"제1조. 개인정보의 처리 목적"} />
							<div class={class_div_ol}>
								<p class={class_ol}>
									주식회사 통계마당은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
								</p>
								<ol class={class_ol}>
									<li>
										홈페이지 회원 가입 및 관리
										<ul class={class_ul}>
											<li>
												회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원 자격 유지·관리, 서비스 부정 이용 방지, 각종 고지·통지, 고충처리 목적으로 개인정보를 처리합니다.
											</li>
										</ul>
									</li>
									<li>
										민원 사무 처리
										<ul class={class_ul}>
											<li>
												민원인의 신원 확인, 민원 사항 확인, 처리 결과 통보 목적으로 개인정보를 처리합니다.
											</li>
										</ul>
									</li>
									<li>
										재화 또는 서비스 제공
										<ul class={class_ul}>
											<li>
												서비스 제공, 계약서·청구서 발송, 콘텐츠 제공, 맞춤 서비스 제공, 본인 인증, 요금 결제 · 정산을 목적으로 개인정보를 처리합니다.
											</li>
										</ul>
									</li>
									<li>
										마케팅 및 광고에의 활용
										<ul class={class_ul}>
											<li>
												신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여 기회 제공 , 인구통계학적 특성에 따른 서비스 제공 및 광고 게재 , 서비스의 유효성 확인, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.
											</li>
										</ul>
									</li>
								 </ol>
							</div>
						</div>
						
						<div class="px-4">
							<Div_title title={"제2조. 개인정보의 처리 및 보유 기간"} />
							<div class={class_div_ol}>
								<p class={class_ol}>
									각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
								</p>
								<ol class={class_ol}>
									<li>
										홈페이지 회원가입 및 관리
										<ul class={class_ul}>
											<li>
												홈페이지 회원가입 및 관리와 관련한 개인정보는 수집, 이용에 관한 동의일로부터 영구적으로 위 이용목적을 위하여 보유, 이용됩니다.
											</li>
											<li>
												보유근거
												<ul class={class_ul}>
													<li>
														신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년
													</li>
													<li>
														소비자의 불만 또는 분쟁처리에 관한 기록 : 3년
													</li>
													<li>
														대금결제 및 재화 등의 공급에 관한 기록 : 5년
													</li>
													<li>
														계약 또는 청약철회 등에 관한 기록 : 5년
													</li>
													<li>
														표시/광고에 관한 기록 : 6개월
													</li>
												</ul>
											</li>
											<li>
												관련법령
												<ul class={class_ul}>
													<li>
														신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년
													</li>
													<li>
														소비자의 불만 또는 분쟁처리에 관한 기록 : 3년
													</li>
													<li>
														대금결제 및 재화 등의 공급에 관한 기록 : 5년
													</li>
													<li>
														계약 또는 청약철회 등에 관한 기록 : 5년
													</li>
													<li>
														표시/광고에 관한 기록 : 6개월
													</li>
												</ul>
											</li>
										</ul>
									</li>
									
								 </ol>
							</div>
						</div>

						<div class="px-4">
							<Div_title title={"제3조. 처리하는 개인정보의 항목"} />
							<div class={class_div_ol}>
								<ol class={class_ol}>
									<li>
										홈페이지 회원가입 및 관리
										<ul class={class_ul}>
											<li>
												필수항목 : 이메일, 비밀번호, 이름, 전화번호
											</li>
											<li>
												선택항목 : 신용카드정보, 은행계좌정보
											</li>
										</ul>
									</li>
								 </ol>
							</div>
						</div>

						<div class="px-4">
							<Div_title title={"제4조. 개인정보의 제 3자 제공에 관한 사항"} />
							<div class={class_div_ol}>
								<ol class={class_ol}>
									<li>
										주식회사 통계마당은 개인정보를 제 1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보 주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제 17조 및 제 18조에 해당하는 경우에만 개인정보를 제 3자에게 제공합니다.
									</li>
								 </ol>
							</div>
						</div>

						<div class="px-4">
							<Div_title title={"제5조. 개인정보의 파기 절차 및 파기 방법"} />
							<div class={class_div_ol}>
								<ol class={class_ol}>
									<li>
										주식회사 통계마당은 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
									</li>
									<li>
										정보 주체로부터 동의 받은 개인정보 보유 기간이 경과하거나 처리 목적이 달성 되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관 장소를 달리하여 보존합니다.
										<ul class={class_ul}>
											<li>
												보존하는 개인정보 항목 : 계좌 정보, 거래 날짜
											</li>
										</ul>
									</li>
									<li>
										개인정보 파기의 절차 및 방법은 다음과 같습니다.
										<ul class={class_ul}>
											<li>
												파기 절차
												<ul class={class_ul}>
													<li>
														주식회사 통계마당은 파기 사유가 발생한 개인정보를 선정하고, 주식회사 통계마당의 개인정보 보호 책임자의 승인을 받아 개인정보를 파기합니다.
													</li>
												</ul>
											</li>
											<li>
												파기 방법
												<ul class={class_ul}>
													<li>
														전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.
													</li>
													<li>
														종이에 출력된 개인정보는 분쇄기로 분쇄 하거나 소각을 통하여 파기합니다.
													</li>
												</ul>
											</li>
										</ul>
									</li>
								 </ol>
							</div>
						</div>

						<div class="px-4">
							<Div_title title={"제6조. 정보 주체와 법정 대리인의 권리·의무 및 그 행사 방법에 관한 사항"} />
							<div class={class_div_ol}>
								<ol class={class_ol}>
									<li>
										정보 주체는 주식회사 통계마당에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
									</li>
									<li>
										제 1항에 따른 권리 행사는 주식회사 통계마당에 대해 「개인정보 보호법」 시행령 제 41조 제 1항에 따라 서면, 전자우편, 모사 전송(FAX) 등을 통하여 하실 수 있으며 주식회사 통계마당은 이에 대해 지체 없이 조치하겠습니다.
									</li>
									<li>
										제 1항에 따른 권리 행사는 정보 주체의 법정 대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 “개인정보 처리 방법에 관한 고시(제 2020-7호)” 별지 제 11호 서식에 따른 위임장을 제출하셔야 합니다.
									</li>
									<li>
										개인정보 열람 및 처리 정지 요구는 「개인정보 보호법」 제 35조 제 4항, 제 37조 제 2항에 의하여 정보 주체의 권리가 제한 될 수 있습니다.
									</li>
									<li>
										개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
									</li>
									<li>
										주식회사 통계마당은(는) 정보 주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리 정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인 인지를 확인합니다.
									</li>
								 </ol>
							</div>
						</div>

						<div class="px-4">
							<Div_title title={"제7조. 개인정보의 안전성 확보 조치에 관한 사항"} />
							<div class={class_div_ol}>
								<p class={class_ol}>
									주식회사 통계마당은 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
								</p>
								<ol class={class_ol}>
									<li>
										정기적인 자체 감사 실시
										<ul class={class_ul}>
											<li>
												개인정보 취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체 감사를 실시하고 있습니다.
											</li>
										 </ul>
									</li>
									<li>
										개인정보 취급 직원의 최소화 및 교육
										<ul class={class_ul}>
											<li>
												개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.
											</li>
										 </ul>
									</li>
									<li>
										내부관리계획의 수립 및 시행
										<ul class={class_ul}>
											<li>
												개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.
											</li>
										 </ul>
									</li>
									<li>
										해킹 등에 대비한 기술적 대책
										<ul class={class_ul}>
											<li>
												주식회사 통계마당은 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.
											</li>
										 </ul>
									</li>
									<li>
										개인정보의 암호화
										<ul class={class_ul}>
											<li>
												이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.
											</li>
										 </ul>
									</li>
									<li>
										접속기록의 보관 및 위변조 방지
										<ul class={class_ul}>
											<li>
												개인정보처리시스템에 접속한 기록을 최소 1년 이상 보관, 관리하고 있으며,다만, 5만명 이상의 정보주체에 관하여 개인정보를 추가하거나, 고유식별정보 또는 민감정보를 처리하는 경우에는 2년이상 보관, 관리하고 있습니다.<br/>
												또한, 접속기록이 위변조 및 도난, 분실되지 않도록 보안기능을 사용하고 있습니다.
											</li>
										 </ul>
									</li>
									<li>
										개인정보에 대한 접근 제한
										<ul class={class_ul}>
											<li>
												개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.
											</li>
										 </ul>
									</li>
									<li>
										문서보안을 위한 잠금장치 사용
										<ul class={class_ul}>
											<li>
												개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가 있는 안전한 장소에 보관하고 있습니다.
											</li>
										 </ul>
									</li>
									<li>
										비인가자에 대한 출입 통제
										<ul class={class_ul}>
											<li>
												개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고 있습니다.
											</li>
										 </ul>
									</li>
								 </ol>
							</div>
						</div>
	
						<div class="px-4">
							<Div_title title={"제8조. 개인정보를 자동으로 수집하는 장치의 설치·운영 및 그 거부에 관한 사항"} />
							<div class={class_div_ol}>
								<ol class={class_ol}>
									<li>
										주식회사 통계마당은 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.
									</li>
									<li>
										쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다.
										<ul class={class_ul}>
											<li>
												쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.
											</li>
											<li>
												쿠키의 설치, 운영 및 거부 : 웹브라우저 상단의 도구 > 인터넷 옵션 > 개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다.
											</li>
											<li>
												쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.
											</li>
										 </ul>
									</li>
								 </ol>
							</div>
						</div>
	
						<div class="px-4">
							<Div_title title={"제9조. 행태정보의 수집·이용·제공 및 거부 등에 관한 사항"} />
							<div class={class_div_ol}>
								<ol class={class_ol}>
									<li>
										개인정보처리자는 서비스 이용과정에서 정보주체에게 최적화된 맞춤형 서비스 및 혜택, 온라인 맞춤형 광고 등을 제공하기 위하여 행태정보를 수집·이용하고 있습니다.
									</li>
									<li>
										개인정보처리자는 다음과 같이 행태정보를 수집합니다.
										<ul class={class_ul}>
											<li>
												수집·처리되는 행태정보 항목 : 이용자의 웹/앱 방문이력, 검색이력, 구매이력
											</li>
										 </ul>
									</li>
									<li>
										개인정보처리자는 온라인 맞춤형 광고 등에 필요한 최소한의 행태정보만을 수집하며, 사상, 신념, 가족 및 친인척관계, 학력·병력, 기타 사회활동 경력 등 개인의 권리·이익이나 사생활을 뚜렷하게 침해할 우려가 있는 민감한 행태정보를 수집하지 않습니다.
									</li>
									<li>
										개인정보처리자는 만 14세 미만임을 알고 있는 아동이나 만14세 미만의 아동을 주 이용자로 하는 온라인 서비스로부터 맞춤형 광고 목적의 행태정보를 수집하지 않고, 만 14세 미만임을 알고 있는 아동에게는 맞춤형 광고를 제공하지 않습니다.
									</li>
									<li>
										개인정보처리자는 모바일 앱에서 온라인 맞춤형 광고를 위하여 광고식별자를 수집·이용합니다. 정보주체는 모바일 단말기의 설정 변경을 통해 앱의 맞춤형 광고를 차단·허용할 수 있습니다.
										<ul class={class_ul}>
											<li>
												스마트폰의 광고식별자 차단/허용
												<ul class={class_ul}>
													<li>
														(안드로이드) ① 설정 → ② 개인정보보호 → ③ 광고 → ③ 광고 ID 재설정 또는 광고ID 삭제
													</li>
													<li>
														(아이폰) ① 설정 → ② 개인정보보호 → ③ 추적 → ④ 앱이 추적을 요청하도록 허용 끔
													</li>
												 </ul>
											</li>
											<li>
												※ 모바일 OS 버전에 따라 메뉴 및 방법이 다소 상이할 수 있습니다.
											</li>
										 </ul>
									</li>
									<li>
										정보주체는 웹브라우저의 쿠키 설정 변경 등을 통해 온라인 맞춤형 광고를 일괄적으로 차단·허용할 수 있습니다. 다만, 쿠키 설정 변경은 웹사이트 자동로그인 등 일부 서비스의 이용에 영향을 미칠 수 있습니다.
										<ul class={class_ul}>
											<li>
												웹브라우저를 통한 맞춤형 광고 차단/허용
												<ul class={class_ul}>
													<li>
														인터넷 익스플로러(Windows 10용 Internet Explorer 11)
														<ul class={class_ul}>
															<li>
																Internet Explorer에서 도구 버튼을 선택한 다음 인터넷 옵션을 선택
															</li>
															<li>
																개인 정보 탭을 선택하고 설정에서 고급을 선택한 다음 쿠키의 차단 또는 허용을 선택
															</li>
														 </ul>
													</li>
													<li>
														Microsoft Edge
														<ul class={class_ul}>
															<li>
																Edge에서 오른쪽 상단 ‘…’ 표시를 클릭한 후, 설정을 클릭합니다.
															</li>
															<li>
																설정 페이지 좌측의 ‘개인정보, 검색 및 서비스’를 클릭 후 「추적방지」 섹션에서 ‘추적방지’ 여부 및 수준을 선택합니다.
															</li>
															<li>
																‘InPrivate를 검색할 때 항상 "엄격" 추적 방지 사용’ 여부를 선택합니다.
															</li>
															<li>
																아래 「개인정보」 섹션에서 ‘추적 안함 요청보내기’ 여부를 선택합니다.
															</li>
														 </ul>
													</li>
													<li>
														크롬 브라우저
														<ul class={class_ul}>
															<li>
																Chrome에서 오른쪽 상단 ‘⋮’ 표시(chrome 맞춤설정 및 제어)를 클릭한 후, 설정 표시를 클릭합니다.
															</li>
															<li>
																설정 페이지 하단에 ‘고급 설정 표시’를 클릭하고 「개인정보」 섹션에서 콘텐츠 설정을 클릭합니다.
															</li>
															<li>
																쿠키 섹션에서 ‘타사 쿠키 및 사이트 데이터 차단’의 체크박스를 선택합니다.
															</li>
														 </ul>
													</li>
												 </ul>
											</li>
										 </ul>
									</li>
									<li>
										정보 주체는 행태 정보와 관련하여 궁금한 사항과 거부권 행사, 피해 신고 접수 등을 문의할 수 있습니다.
									</li>
								 </ol>
							</div>
						</div>
	
						<div class="px-4">
							<Div_title title={"제10조. 추가적인 이용·제공 판단기준"} />
							<div class={class_div_ol}>
								<p class={class_ol}>
									주식회사 통계마당은 ｢개인정보 보호법｣ 제 15조 제 3항 및 제 17조 제 4항에 따라 ｢개인정보 보호법 시행령｣ 제 14조의 2에 따른 사항을 고려하여 정보 주체의 동의 없이 개인정보를 추가적으로 이용·제공할 수 있습니다.<br/>
									이에 따라 주식회사 통계마당이 정보 주체의 동의 없이 추가적인 이용·제공을 하기 위해서 다음과 같은 사항을 고려하였습니다.
								</p>
								<ol class={class_ol}>
									<li>
										개인정보를 추가적으로 이용·제공하려는 목적이 당초 수집 목적과 관련성이 있는지 여부
									</li>
									<li>
										개인정보를 수집한 정황 또는 처리 관행에 비추어 볼 때 추가적인 이용·제공에 대한 예측 가능성이 있는지 여부
									</li>
									<li>
										개인정보의 추가적인 이용·제공이 정보 주체의 이익을 부당하게 침해하는지 여부
									</li>
									<li>
										가명 처리 또는 암호화 등 안전성 확보에 필요한 조치를 하였는지 여부
									</li>
								 </ol>
								 <p class={class_ol}>
									※ 추가적인 이용·제공 시 고려 사항에 대한 판단 기준은 사업자/단체 스스로 자율적으로 판단하여 작성·공개함
								</p>
							</div>
						</div>
	
						<div class="px-4">
							<Div_title title={"제11조. 가명정보를 처리하는 경우 가명정보 처리에 관한 사항"} />
							<div class={class_div_ol}>
								<p class={class_ol}>
									주식회사 통계마당은 다음과 같은 목적으로 가명 정보를 처리하고 있습니다.
								</p>
								<ol class={class_ol}>
									<li>
										가명처리하는 개인정보의 항목
										<ul class={class_ul}>
											<li>
												법 제28조의4(가명정보에 대한 안전조치 의무 등)에 따른 가명정보의 안전성 확보조치에 관한 사항
											</li>
										 </ul>
									</li>
								 </ol>
							</div>
						</div>
	
						<div class="px-4">
							<Div_title title={"제12조. 개인정보 보호책임자에 관한 사항"} />
							<div class={class_div_ol}>
								<ol class={class_ol}>
									<li>
										주식회사 통계마당은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
										<ul class={class_ul}>
											<li>
												개인정보 보호책임자
												<ul class={class_ul}>
													<li>
														성명 : 유재성
													</li>
													<li>
														직책/직급 : 대표이사
													</li>
													<li>
														연락처 : 0507-1300-9704, cs@statground.net
													</li>
												 </ul>
											</li>
										 </ul>
									</li>
									<li>
										정보주체께서는 주식회사 통계마당의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 주식회사 통계마당은 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
									</li>
								 </ol>
							</div>
						</div>

						<div class="px-4">
							<Div_title title={"제13조. 정보 주체의 권익 침해에 대한 구제 방법"} />
							<div class={class_div_ol}>
								<p class={class_ol}>
									정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.
								</p>
								<ul class={class_ul}>
									<li>
										개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)
									</li>
									<li>
										개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)
									</li>
									<li>
										대검찰청 : (국번없이) 1301 (www.spo.go.kr)
									</li>
									<li>
										경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)
									</li>
								</ul>
								<p class={class_ol}>
									「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대 하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.<br/>
									※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기 바랍니다.
								</p>
							</div>
						</div>

						<div class="px-4">
							<Div_title title={"제14조. 개인정보 처리 방침 변경"} />
							<div class={class_div_ol}>
								<p class={class_ol}>
									이 개인정보처리방침은 2021년 12월 9부터 적용됩니다.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
	
	ReactDOM.render(<Div_main />, document.getElementById("div_main"))
}
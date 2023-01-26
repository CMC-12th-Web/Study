## 우아한 비동기
퇴근하면서 유튜브를 보던 중 나의 꿈의 직장.. '토스' 유튜브에서 흥미로운 주제가 있길래 하나 가져와봤습니다.

### [토스ㅣSLASH 21 - 프론트엔드 웹 서비스에서 우아하게 비동기 처리하기](https://www.youtube.com/watch?v=FvRtoViujGg)

"프론트엔드 웹 서비스에서 우아하게 비동기 처리하기" 라는 주제였는데요, 보자마자 우아한 비동기..? 비동기면 비동기지 어떻게 우아하게 처리한다는 거지? 라는 궁금증이 생겼습니다.

내용이 너무너무 알차고.. 너무 좋은 주제라서 보자마자 아! 이건 공유해야겠다.. 싶어서 가져오게 되었습니다.

다들 한번씩 보는걸 추천드려요, 이거 말고도 토스의 프론트 동영상들이 알찬게많답니다.

들어가기에 앞서 여기서 나오는 예제들의 일부는 위에 있는 토스 동영상의 예제 소스들도 포함되어 있는 점 양해부탁드립니다!

---

### 동기와 비동기?

우아한 비동기를 개발하기에 앞서 우리는 동기와 비동기가 무엇인지에 대해 알아야합니다.

#### 동기

-   작업(task)들이 **순차적**으로 이루어 지는 것. ex) A 다음에 B가 실행된다.
-   다른 작업들을 **blocking**한다.

#### 비동기

-   작업(task)들이 **순차적으로 이루어지지 않는**다. ex) A와 B가 동시에 실행될 수 있다.
-   다른 작업들을 **non-blocking**한다.

우리는 오늘 여기서 '비동기'에 대해 자세하게 알아보고자 합니다.

---

### 비동기의 종류

비동기의 종류는 크게 3가지로 구분할 수 있습니다.

#### Callback

-   콜백 함수는 인자로 들어오는 함수를 지칭합니다.
-   콜백은 비동기 통신의 대표적인 패턴입니다.
-   흔히 말하는 콜백 헬로 인해 예외처리의 어려움, 가독성이 떨어질 수 있습니다.

#### Promise

-   ES6에서 나온 비동기 패턴입니다.
-   비동기 통신 결과와 상태를 저장하는 객체입니다.
-   메소드로 then(성공), catch(에러), finally(무조건) 가 있습니다.

#### async/await

-   Promise의 복잡성을 해소하고자 ES8에서 나온 비동기 패턴입니다.
-   Promise를 기반으로 하며, 완전히 동일하진 않으나 Promise보다 사용하기에 편합니다.

---

### 비동기 프로그래밍을 하는 이유?

우리가 하나의 웹사이트를 보고있다고 가정합시다. 우리가 보는 웹사이트가 서버에 요청을 보냈는데, 만약 서버의 응답을 하염없이 기다리기만 하고, 유저의 인터랙션에 반응하지 않는다면 어떨까요?

우리는 그 웹사이트에 매우 부정적인 경험을 줄 것입니다. 하지만 만약 서버에 요청을 보내고 하염없이 기다리기만 하지 않고, 다른 작업을 하면서 사용자에게 좋은 경험을 주다 서버로부터 응답이 돌아올때 다시 이어서 할 일을 한다면 어떨까요? 해당 웹사이트는 직전의 방식보다 더 좋은 사용자 경험을 주게 될 것입니다.

이것이 대표적인 비동기 프로그래밍을 하는 이유가 아닐까요? 

---

### 우아한 비동기 사용하기

우아한 비동기를 사용하기에 앞서 좋은 코드에 대해 이야기를 나누려고 합니다.

```javascript
function fetchAccounts(callback) {
    fetchUserEntity((err, user) => {
        if(err != null) {
            callback(err, null);
            return;
        }

        fetchUserAccounts(user.no, (err, accounts) => {
            if(err != null) {
                callback(err, null);
                return;
            }

            callback(null, accounts);
        })
    })
}
```

이 코드는 callback을 활용한 코드입니다. 이 코드는 에러가 있으면 에러를 emit하고, 에러가 없다면 결과를 emit하는 코드입니다.

이 코드는 promise가 나오기 전에 자주 사용하던 방식입니다. 이 방식이 좋은 방식인지 안좋은 방식인지 알 수 있을까요? 

이 코드의 단점은 성공의 유무와 실패의 유무가 섞여서 처리가 됩니다. 그렇다면 이 코드는 매번 에러의 유무를 확인해야한다는 단점이 명확하게 등장하죠.

callback을 사용하면 우리는 위에 예시처럼 예외처리를 하기 어려움이 있습니다. 그래서 요즘 많은 개발자들이 async/await 을 사용하며 try/catch 를 통해 에러를 핸들링하고 있는 추세죠.

```javascript
// async/await
const fetchUserInfo = async(id) => {
	const user = await fetchUser(id);
    const account = await fetchAccount(user.no);
}

// try/catch 로 에러 핸들링
const fetchGetApi = async(id) => {
	try {
        const user = await fetchUser(id);
        const account = await fetchAccount(user.no);
	} catch {
		throw error;
	}
}
```

그렇다면 위 코드는 왜 좋은코드라고 말할 수 있을까요? 이 코드는 성공하는 경우만 다루고 있습니다. 더 직관적이죠 실패하는 경우는 catch 절에서 분리해 처리할 수 있습니다.

쉽게 말해 실패하는 경우를 외부에 위임할 수 있다는 장점이 있기때문에 좀 더 좋은 코드라고 할 수 있습니다.

즉, 지금까지 살펴보았던 좋은 코드의 특징은 다음과 같습니다.
- 성공, 실패의 경우를 분리해 처리할 수 있다.
- 비지니스 로직을 한눈에 파악할 수 있다.

반대로 어려운 코드의 특징은
- 실패, 성공의 경우가 서로 섞여 처리된다.
- 비지니스 로직을 파악하기 어렵다.

그럼 우리가 실제로 자주 사용하는 비동기 방식에서의 문제점에 대해 이야기해보려고 합니다.

```javascript
function category() {
    const mainCategory = useAsyncValue(() => {
        return fetchMainCategory();
    })

    if(mainCategory.error) return <div>로딩 에러</div>
    if(!mainCategory.data) return <div>로딩 중입니다.</div>

    return (
        <div>
            {mainCategory[1]}
        </div>
    )
}
```

위에처럼 fetch를 받아, 각각의 상태를 return 해주는식의 코드를 사용하는 분들도 많을 것입니다. 이런 경우가 나쁘다 라고 하는것은 아닙니다. 사람마다 코드의 방식이 다르기 떄문인데요,

지금은 mainCategory만 불러오는 내용으로 한가지의 케이스만 고려해도 되기 떄문에 복잡해 보이진 않지만 만약 mainCategory를 불러오고 [1]번째 카테고리의 중분류를 불러오는 api가 추가된다면 어떨까요?

```javascript
function category() {
    const mainCategory = useAsyncValue(() => {
        return fetchMainCategory();
    })

    const subCategory = useAsyncValue(() => {
        if(mainCategory.error || !mainCategory.data){
            return undefined;
        }

        return fetchSubCategory(mainCategory[1]);
    })

    if(mainCategory.error || subCategory.error) return <div>로딩 에러</div>
    if(!mainCategory.data || !subCategory.data) return <div>로딩 중입니다.</div>

    return (
        <div>
            {mainCategory[1]}의 중분류
            {subCategory.map((item) => {
                return <div key={item}>item</div>
            })}
        </div>
    )
} 
```

이렇게 코드가 복잡해지게 됩니다. 만약 여기서 api가 더 붙는다고 생각하면 어떨까요? 끔찍하지 않나요.. 코드를 알아보기도 힘들뿐더러 한눈에 보기에도 복잡해보일겁니다.

그럼 이제 우아한 비동기 방법에 대해 한번 알아보도록 하겠습니다.

우리는 비동기 + suspense의 구조와 react-query + suspense의 구조를 한번 공부해볼 것입니다. 우선 suspense란 무엇일까요?

Suspense는 2018년에 첫 공개가 되었고, React커뮤니티에서 큰 반항을 일으킨 후, React v16.6에 실험기능으로 추가되었습니다. 정식 릴리스는 React v18에서 이루어 진 기능입니다.

Suspense는 랜더링을 어떤 작업(비동기)이 끝날 때까지 잠시 중단시키고 다른 컴포넌트를 먼저 랜더링 할 수 있게 해주는 아주 좋은 기능입니다. 위에서 말했다시피, 로딩 상황일때 사용자가 아무런 조작을 할 수 없게 해주는 것이 아닌, 다른 컴포넌트를 랜더링시켜주면서 사용자에게 좋은 경험을 줄 수 있게 되는 것입니다.

우리가 할 Suspense 구조는 이렇게 되어있습니다.

```javascript
<Suspense fallback={<div>loading!</div>}>
	<App />
</Suspense>
```

App 하위에서 하는 api 콜 때 pendding 상태에서는 Suspense fallback의 컴포넌트가 실행되게 됩니다.

그럼 우리는 fetch만 시켜두고 에러만 throw로 넘거주면 자동으로 pending상태와 error상태에 따라 컴포넌트를 다르게 보여주게 될 것입니다.

나아가 그럼 에러는 어떻게 처리를 할까요?

```javascript
<ErrorBoundary fallback={<div>error</div>}>
    <Suspense fallback={<div>loading!</div>}>
        <App />
    </Suspense>
</ErrorBoundary>
```

이렇게 ErrorBoundary 를 통해 에러 컴포넌트를 따로 낼 수 있는겁니다.

그럼 우리는 이제 api 콜을 칠때 pending 상태와 에러 상태를 따로 체크할 것 없이 throw를 통해 넘겨주기만 하면 되는거죠

자! 근데, api콜을 할때마다 매번 우리는 throw 해줘야 할까요? 하나의 함수를 만들어놓고 사용하면 어떨까요?

---

### 우아한 비동기 호출 함수 만들기

fetchData.js

```javascript
import apiPromise from './apiPromise'

function fetchData(url) {
    const promise = fetch(url)
        .then((res) => res.json())
        .then((res) => res.data)

    return apiPromise(promise)
}

export default fetchData
```

apiPromise.js

```javascript
function apiPromise(promise) {
    let status = 'pending'
    let response

    const suspender = promise.then(
        (res) => {
            status = 'success'
            response = res
        },
        (err) => {
            status = 'error'
            response = err
        },
    )
    
    return {
        read() {
            switch (status) {
                case 'pending':
                    throw suspender
                case 'error':
                    throw response
                default:
                    return response
            }
        },
    }
}

export default apiPromise
```

App.js

```javascript
import React from "react";
import fetchData from "../api/fetchData";

const resource = fetchData(
    'https://' // api 링크
)

export const App = () => {
	const userDetails = resource.read()
	return (
		<div>
			{userDetails}
		</div>
	)
}
```

이렇게 사용하면 userDetails 를 받아올때 로딩 컴포넌트를 랜더링해줄겁니다. 끝나면 우리가 랜더링이 하고 싶은 것을 랜더링 해줄 거고요.

이제 컴포넌트 단위로 Suspense를 넣어서 페이지 로드 시 컴포넌트의 로딩들도 처리를 할 수 있게 된겁니다.

어떤가요 우린 별다른 처리 없이 이제 api를 호출하면 알아서 loading과 error 페이지를 로드해줄 것입니다.!!  

우리는 이제 우아하게 비동기처리를 할 수 있게 된 것입니다. 그럼 이제 많이들 사용하는 react-query 와는 어떻게 같이 사용하는지를 알아볼까요?

진짜 진짜 진짜 간단합니다.. 얼마나 간단하냐면

```javascript
const { isLoading, data, refetch } = useQuery('cache', url,{ suspense: true, });
```

옵션에 suspense 옵션만 true로 주면 됩니다...

이러면 이제 로딩때 알아서 Suspense의 fallback의 컴포넌트를 랜더링 시켜주게 됩니다.
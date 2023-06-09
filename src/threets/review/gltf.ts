import { LoadingManager } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const manager = new LoadingManager();
const gltfLoader = new GLTFLoader(manager);
const bufArrays = [];

gltfLoader.load(new URL("@/assets/box.glb", import.meta.url).href, (gltf) => {
	gltf.scene.traverse((child: any) => {
		if (child.isMesh) {
			child.geometry.translate(-1.2, 0.1, 0);

			// child.geometry.translate(0, 0.5, 0);
			const { array } = child.geometry.attributes.position;
			bufArrays.push(array);
		}
	});
	gltfLoader.load(
		new URL("@/assets/box1.glb", import.meta.url).href,
		(gltf) => {
			gltf.scene.traverse((child: any) => {
				console.log(child.geometry);

				if (child.isMesh) {
					child.geometry.scale(0.5, 0.5, 0.5);
					child.geometry.translate(1.7, 0.1, 0);

					// child.geometry.position.y = -0.15;
					const { array } = child.geometry.attributes.position;
					bufArrays.push(array);
				}
			});
			gltfLoader.load(
				new URL("@/assets/qq1.glb", import.meta.url).href,
				(gltf) => {
					gltf.scene.traverse((child: any) => {
						if (child.isMesh) {
							child.geometry.translate(-1.0, 0.4, 0);
							child.geometry.scale(0.8, 0.8, 0.8);
							child.geometry.rotateX(Math.PI / 2);
							// child.geometry.rotateZ(Math.PI);
							child.geometry.translate(0, 0, 4);

							// child.geometry.rotateZ = Math.PI / 2;
							// child.geometry.rotateY = Math.PI / 2;

							const { array } = child.geometry.attributes.position;
							bufArrays.push(array);
						}
					});
					gltfLoader.load(
						new URL("@/assets/sphere.glb", import.meta.url).href,
						(gltf) => {
							gltf.scene.traverse((child: any) => {
								if (child.isMesh) {
									child.geometry.translate(1.3, 0.1, 0);
									child.geometry.scale(1.2, 1.2, 1.2);

									const { array } = child.geometry.attributes.position;
									bufArrays.push(array);
								}
							});
						}
					);
				}
			);
		}
	);
});

export { bufArrays, manager };

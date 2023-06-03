import { useState } from "react";

import Button from '../component/Button'
import Modal from "../component/Modal";

export default function ModalPage() {
    const [openModal, setOpenModal] = useState(false);

    const handleClick = () => {
        setOpenModal(true);
    }

    const handleClose = () => {
        setOpenModal(false);
    }

    const actionBar = <Button secondary rounded>Accept</Button>
    const modal = <Modal handleClose={handleClose} openModal={openModal} actionBar={actionBar} ><p>Accept our User Policy</p></Modal>

    return (
        <div>
            <Button onClick={handleClick} primary rounded> Open</Button>
            {openModal && modal}

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas placeat, esse perferendis commodi odit vitae dolorum distinctio ea, facere alias nostrum quisquam, explicabo suscipit sunt quis. Culpa saepe optio modi.
                Porro culpa accusamus amet officiis laudantium necessitatibus perspiciatis ut. Esse enim, architecto vitae dolorem ex numquam eveniet voluptatum iste perspiciatis, maxime consequuntur et nostrum cupiditate recusandae sequi, voluptate ea accusamus!
                Repudiandae facilis architecto dolorem ad, ducimus cupiditate error praesentium odio amet consequatur commodi illum animi optio veritatis tenetur. Ipsa veritatis adipisci, doloremque nemo eaque quidem ipsam corrupti in officiis nostrum!
                Sed nesciunt neque beatae nihil praesentium, eos iure voluptatibus voluptates deleniti explicabo quod, odio expedita nam molestiae? Praesentium provident voluptates dolorum beatae architecto voluptate obcaecati, consectetur doloribus! Iure, quia est?
                Accusantium possimus quisquam modi earum qui dicta beatae illo vero aliquam architecto eligendi, obcaecati tempore! Aspernatur cum, quaerat ut ea neque quas. Culpa doloremque sunt nemo error labore sit maiores.
                Saepe tenetur obcaecati aspernatur explicabo. Vero ea corporis aut harum, facilis porro beatae provident esse. Distinctio consequuntur aliquam maiores debitis blanditiis asperiores, eos architecto laboriosam fugiat ipsum explicabo id aspernatur.
                Rem officia reiciendis eos quasi illum, iure a ex obcaecati vero delectus quod atque odit quaerat numquam sequi recusandae nulla deserunt adipisci expedita laborum doloribus id corporis! Consequatur, iusto mollitia.
                Suscipit totam vitae nihil cupiditate modi, nemo, impedit ea omnis et tempora, accusantium explicabo dolor autem ullam inventore unde necessitatibus nesciunt sed vero a. Facere officia numquam porro nihil voluptatem.
                In eos ipsum aliquid praesentium consequuntur soluta, hic quas nemo architecto laudantium quia iste excepturi dicta voluptatibus dolor magni libero enim fuga similique quidem pariatur nam. Incidunt esse ipsum mollitia!
                Suscipit vel enim possimus blanditiis tempore voluptate nulla voluptates saepe, mollitia nam quasi, quaerat soluta quis laborum minima sit eos ducimus velit sunt? Facere ratione autem, vitae provident accusamus pariatur.
                Enim nihil sed soluta veritatis eaque repudiandae necessitatibus, aspernatur qui sunt nobis quia tempora commodi voluptas excepturi a illo ratione vero atque amet. Saepe deserunt ipsa praesentium optio placeat rem.
                Optio dignissimos modi rerum ducimus omnis porro temporibus inventore mollitia, voluptatibus doloremque expedita itaque sit! In eligendi dolorem eos eius! Placeat dignissimos voluptatem quia soluta facilis impedit! Modi, natus eveniet.
                Obcaecati, quo ut! Ea ex molestias, quasi inventore facere aut aliquam perferendis magnam repudiandae. Quia ullam itaque, sapiente sed, reiciendis voluptatum unde doloremque accusamus aliquam dolorum laboriosam rerum at temporibus.
                Totam corporis ex natus facere maxime quod animi eos rerum voluptas labore placeat adipisci in, assumenda, doloremque omnis error dolorem ut tempora sit et. Ab voluptate iure iste tempore quibusdam.
                Incidunt, consequatur qui. Id ex expedita consequatur nesciunt molestias suscipit facere similique fugit quis iste omnis nisi doloremque in sed excepturi, velit sapiente magni! Unde velit delectus atque sed placeat?
                Placeat libero cum, labore laudantium aut dignissimos dolore recusandae nesciunt quaerat expedita assumenda odio architecto sapiente? Sint pariatur nemo nostrum. Sapiente consequuntur quibusdam illum laudantium facilis at, eligendi molestiae a?
                Reprehenderit ratione, earum quo minima reiciendis aliquam culpa omnis facere in aliquid voluptatibus natus sit nam temporibus recusandae vitae obcaecati alias minus perferendis! Quis recusandae accusantium quaerat dignissimos at veritatis?
                Eum, magnam, eveniet doloremque sint rem impedit rerum beatae quod deleniti aspernatur animi harum qui at suscipit dolorem totam. Veritatis dolores incidunt tempore quam at vel similique, officia distinctio odit.
                Consequuntur qui enim reiciendis! Illum necessitatibus nam vero error qui eos quaerat! Voluptate, laborum consequuntur aliquid nesciunt, magnam rerum ducimus minus autem quia consectetur, excepturi optio dolores perspiciatis beatae aperiam.
                Consequatur ut laboriosam perspiciatis placeat quibusdam, dolorem itaque doloremque saepe? Sed saepe, neque a suscipit modi iusto sint consectetur asperiores at culpa deleniti mollitia animi dolore unde iste! Iusto, dolores.</p>

        </div>
    )

}